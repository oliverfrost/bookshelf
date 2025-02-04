"use server";

import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { AuthorTable } from "@/db/schema/schema";

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
