import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEnitity{
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({nullable: true})
    createdAt?: Date;

    @CreateDateColumn({nullable: true})
    updatedAt?: Date;

}