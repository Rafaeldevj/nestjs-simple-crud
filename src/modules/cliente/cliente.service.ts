import { Injectable } from '@nestjs/common';
import RepositoryService from '../service/respository.service';

import ICliente from '../../interfaces/cliente';

@Injectable()
export class ClienteService {

  constructor(private readonly repositoryService: RepositoryService) {}

  async findAll(): Promise<ICliente[]> {
    return this.repositoryService.clienteRepository.find();
  }

  async find(id: number) {
    const cliente = await this.repositoryService.clienteRepository.findOne(id);
    if (!cliente) {
      return { cod: 2, msg: 'Cliente não encontrado!' }
    }
    return cliente;
  }

  async cretae(data: ICliente): Promise<ICliente> {
    const cliente = await this.repositoryService.clienteRepository.create(data);
    await this.repositoryService.clienteRepository.save(cliente)
    return cliente;
  }

  async update(id: number, data: ICliente): Promise<ICliente> {
    await this.repositoryService.clienteRepository.update({ id }, data)
    return await this.repositoryService.clienteRepository.findOne({ id })
  }

  async delete(id: number) {
    const cliente = await this.repositoryService.clienteRepository.findOne(id);
    if (!cliente) {
      return { cod: 2, msg: 'Cliente não encontrado!' }
    }
    await this.repositoryService.clienteRepository.delete({ id });
    return { cod: 1, msg: 'Cliente removido com sucesso!' }
  }
}
