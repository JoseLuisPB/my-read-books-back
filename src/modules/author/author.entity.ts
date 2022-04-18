/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookEntity } from "../book/book.entity";

@Entity('author')
export class AuthorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    country: string;

    @OneToMany(() => BookEntity, book => book.author)
    books: BookEntity[];

}