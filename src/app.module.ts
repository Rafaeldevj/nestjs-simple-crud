import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryModule } from './modules/service/repository.module';
import { ClienteModule } from './modules/cliente/cliente.module'

import * as databaseConfig from './config/databaseconfig';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), RepositoryModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
