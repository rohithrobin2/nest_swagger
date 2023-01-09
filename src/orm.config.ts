import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const config: TypeOrmModuleOptions={
    type: 'postgres',
    username: 'postgres',
    password: 'Rithwika@2',
    port: 5432,
    host: '127.0.0.1',
    database: 'users',
    synchronize: true ,
    entities: ['dist/**/*.entity{.ts,.js}']
}