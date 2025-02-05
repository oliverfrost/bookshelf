import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full p-4 bg-slate-300">
      <nav>
        <ul className="list-none">
          <li className="inline mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="inline mr-4">
            <Link href="/library">Library</Link>
          </li>
          <li className="inline mr-4">
            <Link href="/books">Books</Link>
          </li>
          <li className="inline mr-4">
            <Link href="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
