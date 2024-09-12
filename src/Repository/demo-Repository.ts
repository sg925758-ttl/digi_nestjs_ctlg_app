import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DemoRepository {
  constructor(private readonly oracleService: DatabaseService) {}

  async createdemo(name: string, email: string,address:string): Promise<void> {
    const connection = this.oracleService.getConnection();
    const sql = `INSERT INTO NESTJS_TEST (name, email,address) VALUES (:name, :email, :address)`;
    await connection.execute(sql, [name, email, address], { autoCommit: true });
  }

  async findDemoById(id: number): Promise<any> {
    const connection = this.oracleService.getConnection();
    const sql = `SELECT * FROM NESTJS_TEST WHERE id = :id`;
    const result = await connection.execute(sql, [id]);
    return result.rows[0];
  }

  async updatedemo(id: number, name: string, email: string, address:string): Promise<void> {
    const connection = this.oracleService.getConnection();
    const sql = `UPDATE NESTJS_TEST SET name = :name, email = :email, address = :address WHERE id = :id`;
    await connection.execute(sql, [name, email, address,id], { autoCommit: true });
  }

  async deletedemo(id: number): Promise<void> {
    const connection = this.oracleService.getConnection();
    const sql = `DELETE FROM NESTJS_TEST WHERE id = :id`;
    await connection.execute(sql, [id], { autoCommit: true });
  }
}
