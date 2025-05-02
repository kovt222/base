import { DataSource } from 'typeorm';
import 'dotenv/config';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  autoLoadEntities: false,
  entities: ['dist/modules/*/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
});