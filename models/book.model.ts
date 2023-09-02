export interface Book {
    id: string;
    author: string;
    publisher: string;
    title: string;
    description: string;
    ISBN: string;
    genres: string[];
    language: string;
    yearOfPublication: number;
    coverImg: string;
}