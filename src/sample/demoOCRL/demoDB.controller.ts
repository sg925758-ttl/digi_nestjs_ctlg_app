import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DemoDBService } from './demoDB.service';

@Controller('Demo')
export class DemoDBController {
  constructor(private readonly demodbService: DemoDBService) {}
  @Post()
  async createDemo(@Body() body: { name: string; email: string,address:string }) {
    await this.demodbService.createDemo(body.name, body.email,body.address);
    return { message: 'Demo created' };
  }

  @Get(':id')
  async findDemoById(@Param('id') id: number) {
    const demo = await this.demodbService.findDemoById(id);
    return demo;
  }

  @Put(':id')
  async updateDemo(@Param('id') id: number, @Body() body: { name: string; email: string,address:string }) {
    await this.demodbService.updateDemo(id, body.name, body.email,body.address);
    return { message: 'Demo updated' };
  }

  @Delete(':id')
  async deleteDemo(@Param('id') id: number) {
    await this.demodbService.deleteDemo(id);
    return { message: 'Demo deleted' };
  }
  // @Get()
  // async findSomething() {
  //   return this.demodbService.findSomething();
  // }
}
