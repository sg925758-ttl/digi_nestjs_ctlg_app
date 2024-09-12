import { Module } from '@nestjs/common';
import { DemoDBService } from './demoDB.service';
import { DatabaseModule } from 'src/database/database.module';
import { DemoDBController } from './demoDB.controller';
import { DemoRepository } from 'src/Repository/demo-Repository';

@Module({
  imports: [DatabaseModule],
  controllers:[DemoDBController],
  providers: [DemoDBService,DemoRepository],
  exports: [DemoDBService],

})
export class DemoDBModule {}
