/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { bookDto } from './book.dto';
import { BookEntity } from './book.entity';
import { Book } from './book.model';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity) private readonly bookRepo: Repository<BookEntity>
    ){}

    async findAll() {
        return await this.bookRepo.find({relations:['author']});
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

    async getLastNBooks(records: number): Promise<bookDto[]> {
        const lastNBooks = await getRepository(BookEntity)
            .createQueryBuilder('book')
            .leftJoinAndSelect('book.author', 'author')
            .orderBy('book.id', 'DESC')
            .limit(records)
            .getMany();
        const bookList: bookDto[] = [];
        lastNBooks.forEach( item => {
            bookList.push(
                {
                    id: item.id,
                    author: item.author.fullName,
                    title: item.title,
                    year: item.year
                }
            )
        })

        return bookList;
    }
}
