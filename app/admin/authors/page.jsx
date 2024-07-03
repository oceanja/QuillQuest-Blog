import { CirclePlus } from "lucide-react";
import Link from "next/link";
import AuthorsListView from "./components/AuthorsListView";

export default function Page() {
  return (
    <main className="p-6 w-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <h1 className="font-bold text-center sm:text-left">Authors</h1>
        <Link href="/admin/authors/form">
          <button className="flex gap-2 items-center bg-purple-300 px-4 py-2 text-white rounded-full font-bold">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
      <AuthorsListView />
    </main>
  );
}
