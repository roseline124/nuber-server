import { ConnectionOptions } from 'typeorm'

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  database: 'nuber',
  synchronize: true,
  logging: true,
  entities: ['src/entities/**/*.*'],
  host: process.env.DB_ENDPOINT,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}

export default connectionOptions
