/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from './author.entity';
import { Author } from './author.model';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorEntity) private readonly authorRepo: Repository<AuthorEntity>
    ){}

    async findAll() {
        return this.authorRepo.find();
    }

    async findAuthor(id: number) {
        return this.authorRepo.findOne(id);
    }

    async saveAuthor(author: Author) {
        return this.authorRepo.save(author);
    }

    async updateAuthor(id: number, author: Author) {
        return this.authorRepo.update(id, author);
    }

    async deleteAuthor(id: number) {
        return this.authorRepo.delete(id);
    }
}
