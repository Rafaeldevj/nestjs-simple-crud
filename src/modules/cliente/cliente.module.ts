import { Module } from '@nestjs/common';
import { AppController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ClienteService]
})
export class ClienteModule {}
