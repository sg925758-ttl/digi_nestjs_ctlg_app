import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: process.env.DBCONNECSTR,
  port: 1521, // default Oracle port
  username: process.env.DBUSERNAME,
  password: process.env.DBUSERPASS,
  synchronize: true, // set to false in production
};
// Another way of connecting DB but this is not implement fully now
