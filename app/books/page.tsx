import { BOOKS } from "@/data/books";
import { getAllBooks } from "./actions";
import BookItem from "@/app/books/components/Book";

export default async function Books() {
  const books = await getAllBooks();

  console.log("[Books] Books fetched from DB: ", books);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Please see our books:</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* TODO: BOOKS are temporary hardcoded until I'll get them from DB */}
        {BOOKS.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>

      <h2>Books from DB</h2>
      {books.map((b) => (
        <span key={b.id}>{b.title}</span>
      ))}
    </div>
  );
}
