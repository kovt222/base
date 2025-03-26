import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  // * App
  get app_port(): number {
    return Number(this.configService.get<string>('app.port'));
  }

  get app_maintenance_mode(): string | undefined {
    return this.configService.get<string>('app.maintenance_mode');
  }

  // * JWT
  get jwt_algorithm(): string | undefined {
    return this.configService.get<string>('jwt.algorithm');
  }

  get jwt_expires_in(): string | undefined {
    return this.configService.get<string>('jwt.expires_in');
  }

  get jwt_secret_key(): string | undefined {
    return this.configService.get<string>('jwt.secret_key');
  }

  // * Database
  get db_host(): string {
    return this.configService.get<string>('database.host') || 'localhost';
  }

  get db_port(): number {
    return Number(this.configService.get<string>('database.port'));
  }

  get db_username(): string | undefined {
    return this.configService.get<string>('database.username');
  }

  get db_password(): string | undefined {
    return this.configService.get<string>('database.password');
  }

  get db_name(): string | undefined {
    return this.configService.get<string>('database.name');
  }

  
}