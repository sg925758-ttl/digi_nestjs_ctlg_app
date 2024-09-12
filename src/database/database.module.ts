import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './database.config';

@Module({  
   imports:[ 
  //   TypeOrmModule.forRoot({
  //   type: 'oracle',
  //   host: '172.24.47.92',
  //   port: 1521, // Default port for Oracle
  //   username: 'CORDYSDEVTX',
  //   password: 'CORDYSDEVTX',
  //   sid: '', // Oracle SID
  //   serviceName:"OTPSDEV",
  //   // or use service name
  //   // serviceName: 'your-service-name',
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Automatically load entities
  //   synchronize: true, // Set to false in production
  // })
  ConfigModule.forRoot({ 
    envFilePath: `src/config/env/${process.env.NODE_ENV}.env`,
    isGlobal:true,
    expandVariables:true,
    load: [databaseConfig]
      // validationSchema,
 }),
],
providers:[DatabaseService],
exports: [DatabaseService,
  // TypeOrmModule
],
})
export class DatabaseModule {}
