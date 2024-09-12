import { Injectable, OnModuleInit } from '@nestjs/common';
import oracledb from 'oracledb';
import { databaseConfig } from './database.config';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private connection: oracledb.Connection;
constructor(private configService: ConfigService){
 console.log(this.configService.get<string>('dbconconfig'));
}
  async onModuleInit() {
    try {
      console.log(this.configService)
      this.connection = await oracledb.getConnection(this.configService.get<string>('dbconconfig'));
    } catch (error) {
      console.error('Failed to connect to Oracle Database', error);
    }
  }
  async onModuleDestroy() {
    if (this.connection) {
      await this.connection.close();
      console.log('OracleDB connection closed');
    }
  }
  getConnection() {
    return this.connection;
  }
}

// user:process.env.DBUSERNAME, // 'CORDYSDEVTX',
// password: process.env.DBUSERPASS ,//'CORDYSDEVTX',
// connectString:process.env.DBCONNECSTR //'172.24.47.92:1521/OTPSDEV', // e.g., 'localhost/XEPDB1'