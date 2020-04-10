import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';

import ICliente from '../../interfaces/cliente';

@Controller('clientes')
export class AppController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  async listaClientes() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  async buscaCliente(@Param('id') id: number) {
    return this.clienteService.find(id);
  }

  @Post()
  async salvaCliente(@Body() cliente: ICliente) {
    return this.clienteService.cretae(cliente);
  }

  @Put()
  async atualizarCliente(@Body() cliente: ICliente) {
    return this.clienteService.update(cliente.id, cliente);
  }

  @Delete(':id')
  async removerCliente(@Param('id') id: number) {
    return this.clienteService.delete(id);
  }
}
