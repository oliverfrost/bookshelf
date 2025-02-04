import { AuthorForm } from "../components/AuthorForm";

export default function AddAuthorPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Author</h1>
      <AuthorForm />
    </div>
  );
}
