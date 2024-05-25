import { BOOKS } from "@/data/books";
import { db } from "../../db/db";
import BookItem from "@/app/books/components/Book";

export default async function Books() {
  const getAllBooks = async () => {
    return db.query.BookTable.findMany({});
  };

  const books = await getAllBooks();

  console.log("!!! -----> BOOKS: ", books);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Please see our books:</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}
