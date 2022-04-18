/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Author } from './author.model';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
    constructor(
        private readonly authorService: AuthorService
    ){}

    @Get()
    findAllAuthors() {
        return this.authorService.findAll();
    }

    @Get(':id')
    findAuthor(@Param() params){
        return this.authorService.findAuthor(params.id);
    }

    @Post()
    createAuthor(@Body() author: Author) {
        return this.authorService.saveAuthor(author);
    }

    @Put()
    updateAuthor(@Body() author: Author) {
        return this.authorService.updateAuthor(author.id, author);
    }

    @Delete(':id')
    deleteAuthor(@Param() params) {
        return this.authorService.deleteAuthor(params.id);
    }

}
