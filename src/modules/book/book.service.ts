/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { BookDto } from './book.dto';
import { BookEntity } from './book.entity';
import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity) private readonly bookRepo: Repository<BookEntity>
    ){}

    async findAll(): Promise<BookDto[]> {
        const books = await this.bookRepo.find({relations:['author']});
        return this.convertToDtoObject(books);
    }

    async findBook(id: number) {
        return await this.bookRepo.findOne(id);
    }

    async saveBook(book: Book) {
        await this.bookRepo.save(book);
    }

    async updateBook(id: number, book: Book) {
        await this.bookRepo.update(id, book);
    }

    async deleteBook(id: number) {
        await this.bookRepo.delete(id);
    }

    async getLastNBooks(limit: number): Promise<BookDto[]> {
        const lastNBooks = await getRepository(BookEntity)
            .createQueryBuilder('book')
            .leftJoinAndSelect('book.author', 'author')
            .orderBy('book.id', 'DESC')
            .limit(limit)
            .getMany();    
        return this.convertToDtoObject(lastNBooks);
    }

    private convertToDtoObject(books: Book[]): BookDto[] {
        const bookList: BookDto[] = [];
        books.forEach( item => {
            bookList.push(
                {
                    id: item.id,
                    author: item.author.fullName,
                    country: item.author.country,
                    title: item.title,
                    year: item.year
                }
            )
        })
        return bookList;
    }
}
