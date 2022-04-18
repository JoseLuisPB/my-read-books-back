/* eslint-disable prettier/prettier */
import { Author } from "../author/author.model";

export class Book {
    id: number;
    author: Author;
    title: string;
    year: number;
}