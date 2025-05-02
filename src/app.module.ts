import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@config/configuration.module';
import { DatabaseModule } from '@database/database.module';
import { DataModule } from '@data/data.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '@shared/interceptors/logging.interceptor';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    DataModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
