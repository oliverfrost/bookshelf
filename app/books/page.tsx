import {BOOKS} from '@/data/books';
import Book from "@/app/books/components/Book";

export default function Books() {
    return <div>
        <h1 className="mb-4 text-2xl font-bold">Please see our books:</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {BOOKS.map(book => <Book book={book} key={book.id}/>)}
        </div>
    </div>
}


