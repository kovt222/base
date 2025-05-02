import { ConfigurationModule } from "@config/configuration.module";
import { ConfigurationService } from "@config/configuration.service";
import { User } from "src/data/user/user.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";



const ENTITIES = [
	User,
];

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigurationModule],
			useFactory: (config: ConfigurationService): TypeOrmModuleOptions => ({
				type: 'postgres',
				host: config.db_host,
				port: config.db_port,
				username: config.db_username,
				password: config.db_password,
				database: config.db_name,
				entities: [__dirname + '/../data/**/*.entity{.ts,.js}'],
				migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
				// entities: ENTITIES,
				migrationsRun: false,
				synchronize: false,
			}),
			inject: [ConfigurationService],
		})
	],
})
export class DatabaseModule {}