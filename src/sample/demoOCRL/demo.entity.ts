import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nestjs_test')
export class NestJSTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
