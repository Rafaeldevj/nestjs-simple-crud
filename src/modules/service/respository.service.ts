import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Cliente from '../../models/ClienteEntity';

@Injectable()
export default class RepositoryService {
    public constructor(
        @InjectRepository(Cliente) public readonly clienteRepository: Repository<Cliente>
    ) {}
}