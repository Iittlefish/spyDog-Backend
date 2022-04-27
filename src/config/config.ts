import { ConnectionOptions, Connection } from 'typeorm';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '1234',
  database: 'backendDB',
  dropSchema: false,
  entities: [],
  migrationsRun: false,
  extra: {
    charset: 'utf8_unicode_ci',
  },
  logging:'all',
} as ConnectionOptions;
