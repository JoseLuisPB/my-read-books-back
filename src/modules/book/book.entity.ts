/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AuthorEntity } from "../author/author.entity";

@Entity('book')
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => AuthorEntity, author => author.books)
    author: AuthorEntity;

    @Column()
    title: string;

    @Column()
    year: number;

    
}