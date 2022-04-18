/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book } from './book.model';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(
        private readonly bookService: BookService
    ){}
    @Get()
    findAllBooks() {
        return this.bookService.findAll();
    }

    @Get(':id')
    findBook(@Param() params) {
        return this.bookService.findBook(params.id)
    }

    @Post()
    createBook(@Body() book: Book) {
        return this.bookService.saveBook(book);
    }

    @Put()
    updateBook(@Body() book: Book) {
        return this.bookService.updateBook(book.id, book);
    }

    @Delete(':id')
    deleteBook(@Param() params){
        return this.bookService.deleteBook(params.id);
    }

    @Get('/lastNBooks/:records')
    lastNBooks(@Param() params){
        return this.bookService.getLastNBooks(params.records);
    }
}
