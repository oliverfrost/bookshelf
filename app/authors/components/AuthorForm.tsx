"use client";

import { createAuthor } from "../actions";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface FormInputs {
  name: string;
  bio: string;
}

export function AuthorForm() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await createAuthor(formData);

    if (result?.error) {
      console.log("Form submission failed!");
    }
  };

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

        <Button className="bg-red-200" type="submit">
          Add Author
        </Button>
      </form>
    </div>
  );
}
