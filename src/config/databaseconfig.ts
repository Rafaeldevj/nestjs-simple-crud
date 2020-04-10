import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'db_nestjs',
    entities: [
        __dirname + '/../models/*Entity{.ts,.js}',
    ],
    synchronize: true,
};

module.exports = options;