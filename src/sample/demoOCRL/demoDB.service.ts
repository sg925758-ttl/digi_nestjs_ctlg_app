import { Injectable } from '@nestjs/common';
import { DemoRepository } from 'src/Repository/demo-Repository';
@Injectable()
export class DemoDBService {
  constructor(private readonly demoRepository: DemoRepository) {}

  async createDemo(name: string, email: string,address:string): Promise<void> {
    await this.demoRepository.createdemo(name, email,address);
  }

  async findDemoById(id: number): Promise<any> {
    return this.demoRepository.findDemoById(id);
  }

  async updateDemo(id: number, name: string, email: string,address:string): Promise<void> {
    await this.demoRepository.updatedemo(id, name, email,address);
  }

  async deleteDemo(id: number): Promise<void> {
    await this.demoRepository.deletedemo(id);
  }

  // async create(userDto: CreateDemoDto): Promise<NestJSTest> {
  //   const user = this.demoRepository.create(userDto);
  //   return this.demoRepository.save(user);
  // }

  // async findAll():Promise<NestJSTest[]>{
  //   return this.demoRepository.find();
  // }
  
  // async findOne(id:number):Promise<NestJSTest>{
  //   return this.demoRepository.findOneBy({id});
  // }

  // async update(id: number, userDto: UpdateDemoDto): Promise<NestJSTest> {
  //   await this.demoRepository.update(id, userDto);
  //   return this.demoRepository.findOneBy({ id });
  // }

  // async remove(id: number): Promise<void> {
  //   await this.demoRepository.delete(id);
  // }

  // async findSomething(): Promise<any> {
  //   const connection = this.databaseService.getConnection();
  //   try {
  //     const result = await connection.execute(
  //       `SELECT * FROM CUSTOMER`,
  //       [], // Bind parameters, if any
  //       { outFormat: oracledb.OUT_FORMAT_OBJECT } // Return results as objects
  //     );
  //     return result.rows;
  //   } catch (error) {
  //     console.error('Error executing query', error);
  //     throw error;
  //   }
  // }
}
