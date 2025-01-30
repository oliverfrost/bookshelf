"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { NextResponse } from "next/server";
import { db } from "@/db/db";

export default function AddAuthor() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const authorData = {
      name: formData.get("name") as string,
      lastname: formData.get("lastname") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
    };

    try {
      const newAuthor = await db
        .insert(authorData)
        .values({
          name: authorData.name,
          lastname: authorData.lastname,
          dateOfBirth: new Date(authorData.dateOfBirth), // Convert string to Date
        })
        .returning();

      return NextResponse.json(newAuthor[0], { status: 201 });
    } catch (error) {
      console.error("Failed to create author:", error);
      return NextResponse.json(
        { error: "Failed to create an author" },
        { status: 500 }
      );
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Authors</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="name">Name</label>
          <Input id="name" name="name" required placeholder="First name" />
        </div>

        <div>
          <label htmlFor="lastname">Last Name</label>
          <Input
            id="lastname"
            name="lastname"
            required
            placeholder="Last name"
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <Input id="dateOfBirth" name="dateOfBirth" type="date" required />
        </div>

        <Button type="submit">Add Author</Button>
      </form>
    </div>
  );
}
