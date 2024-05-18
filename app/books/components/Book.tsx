import {Book} from '@/models/book.model';
import Genre from "@/app/books/components/Genre";
import Link from "next/link";

export default function BookItem(props: { book: Book }) {
    const {book} = props;

    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={book.coverImg} width="324" height="234" alt="Book Cover"/>
        <div className="px-6 py-4">
            <Link className="font-bold text-xl mb-2" href={`/books/${book.id}`}>{book.title}</Link>
            <p className="text-gray-700 text-base">
                {book.description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {book.genres.map(genre => <Genre key={genre} name={genre}/>)}
        </div>
    </div>
}