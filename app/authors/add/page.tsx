import { Input } from "@nextui-org/input";

export default function AddAuthor() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Add Author:</h1>

      <Input type="text" label="Name" className="max-w-xs" />

      <Input type="text" label="Last name" className="max-w-xs" />
    </div>
  );
}
