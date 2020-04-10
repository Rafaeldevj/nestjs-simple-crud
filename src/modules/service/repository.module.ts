import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepositoryService from './respository.service';

import Cliente from '../../models/ClienteEntity';

@Global()
@Module({
  imports: [
      TypeOrmModule.forFeature([
          Cliente
      ])
  ],
  providers: [RepositoryService],
  exports: [RepositoryService]
})
export class RepositoryModule {}
