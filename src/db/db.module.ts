import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact, Deal } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, Deal])],
  exports: [TypeOrmModule],
})
export class DbModule {}
