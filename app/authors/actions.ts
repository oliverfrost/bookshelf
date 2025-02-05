"use server";

import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { AuthorTable } from "@/db/schema/schema";
import { Author } from "../../models/author.model";
import { eq } from "drizzle-orm";

export async function createAuthor(formData: FormData): Promise<NextResponse> {
  const authorData = {
    name: formData.get("name") as string,
    lastname: formData.get("lastname") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
  };

  try {
    const newAuthor = await db
      .insert(AuthorTable)
      .values({
        name: authorData.name,
        lastname: authorData.lastname,
        dateOfBirth: new Date(authorData.dateOfBirth).toISOString(), // Convert string to Date
      })
      .returning();
    console.info(
      `Author ${authorData.name} ${authorData.lastname} was added successfully!`
    );

    return NextResponse.json(newAuthor[0], { status: 201 });
  } catch (error) {
    console.error("Failed to create author:", error);

    return NextResponse.json(
      { error: "Failed to create an author" },
      { status: 500 }
    );
  }
}

export const deleteAuthor = async (id: string): Promise<NextResponse> => {
  try {
    const deletedAuthor = await db
      .delete(AuthorTable)
      .where(eq(AuthorTable.id, id))
      .returning();

    if (!deletedAuthor.length) {
      return NextResponse.json({ error: "Author not found" }, { status: 404 });
    }

    console.info(`Author with id ${id} was deleted successfully!`);
    return NextResponse.json(deletedAuthor[0], { status: 200 });
  } catch (error) {
    console.error("Failed to delete author:", error);
    return NextResponse.json(
      { error: "Failed to delete the author" },
      { status: 500 }
    );
  }
};

export const getAllAuthors = async (): Promise<Author[]> => {
  return db.query.AuthorTable.findMany({});
};
