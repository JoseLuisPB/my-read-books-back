/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AuthorEntity])],
    providers: [AuthorService],
    controllers: [AuthorController]
})
export class AuthorModule {}
