import {Column, CreateDateColumn, Entity, DeleteDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({default: "active"})
    status: string;

    @CreateDateColumn()
    date_created: Date;

    @Column("timestamp with time zone", {nullable: true})
    date_updated: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}
