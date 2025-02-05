"use client";

import { getAllAuthors, deleteAuthor } from "./actions";

export default async function Authors() {
  const authors = await getAllAuthors();

  const onDeleteAuthor = async (id: string) => {
    await deleteAuthor(id);
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Authors</h1>

      <div className="">
        {authors.map((author) => (
          <div key={author.id}>
            <span>
              {author.name} {author.lastname} was born in {author.dateOfBirth}
              <button onClick={() => onDeleteAuthor(author.id)}>Delete</button>
              <br />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
