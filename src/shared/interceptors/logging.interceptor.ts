import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: any = context.switchToHttp().getRequest<Request>();
    const { method, body, query, params, path, ip, user } = request;

    let message: string = `method: ${JSON.stringify(method)}`;
    if (!!user?.username) {
      message += ` - user-request: ${JSON.stringify(user?.username)}`;
    }

    message += ` - path: ${JSON.stringify(path)}`;

    if(!!body && Object.keys(body)?.length > 0) {
      message += ` - body: ${JSON.stringify(body)}`;
    }

    if(!!query && Object.keys(query)?.length > 0) {
      message += ` - query: ${JSON.stringify(query)}`;
    }
    if(!!params && Object.keys(params)?.length > 0) {
      message += ` - params: ${JSON.stringify(params)}`;
    }

    return next.handle().pipe(
      map((value, index) => {

        Logger.log(`OK - ` + message);

        return value;
      }),
      catchError((err) => {
        message += ` - error: ${JSON.stringify(err.message)}`;
        Logger.log(`ERROR - ` + message);
        return throwError(() => err);
      }),
    );
  }
}
