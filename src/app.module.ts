import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@config/configuration.module';
import { DatabaseModule } from '@database/database.module';
import { DataModule } from '@data/data.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
