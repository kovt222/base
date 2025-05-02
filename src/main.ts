import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerSetup } from '@shared/utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerSetup(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
