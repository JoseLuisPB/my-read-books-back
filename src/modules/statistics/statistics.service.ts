/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { getRepository} from 'typeorm';
import { AuthorEntity } from '../author/author.entity';
import { BookEntity } from '../book/book.entity';

@Injectable()
export class StatisticsService {
    
    async getYearList(): Promise<number[]>{
        const yearList: number[] = [];
        const years = await getRepository(BookEntity)
            .createQueryBuilder('book')
            .select('book.year')
            .orderBy('book.year', 'DESC')
            .groupBy('book.year')
            .getMany();
        years.forEach( year => yearList.push(year.year));
        return yearList;
    }

    async getAuthorList(): Promise<string[]>{
        const authorList: string[] = [];
        const authors = await getRepository(AuthorEntity)
            .createQueryBuilder('author')
            .select('author.fullName')
            .orderBy('author.fullName', 'ASC')
            .groupBy('author.fullName')
            .getMany();
        authors.forEach(author => authorList.push(author.fullName));
        return authorList;
    }

    async getCountryList(): Promise<string[]>{
        const countryList: string[] = []
        const countries = await getRepository(AuthorEntity)
            .createQueryBuilder('author')
            .select('author.country')
            .orderBy('author.country', 'ASC')
            .groupBy('author.country')
            .getMany();
        countries.forEach(country => countryList.push(country.country));
        return countryList;
    }
}
