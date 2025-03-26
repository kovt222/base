import "dotenv/config";

export default () => ({
  app: {
    maintenance_mode: process.env.MAINTENANCE_MODE || false,
    port: parseInt(process.env.APP_PORT || '3000', 10),
  },

  jwt: {
    algorithm: 'HS512',
    expires_in: '30d',
    secret_key:'123123123'
  },

  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    name: process.env.DB_NAME || 'postgres',
  },
});
