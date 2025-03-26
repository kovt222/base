import { Module } from "@nestjs/common";
import { ConfigurationService } from "./configuration.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, ConfigurationService],
  exports: [ConfigService, ConfigurationService],
})
export class ConfigurationModule {}