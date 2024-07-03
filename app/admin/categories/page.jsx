import { CirclePlus } from "lucide-react";
import Link from "next/link";
import CategoriesListView from "./components/CategoriesListView";

export default function Page() {
  return (
    <main className="p-4 md:p-6 w-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h1 className="font-bold text-center md:text-left">Categories</h1>
        <Link href="/admin/categories/form">
          <button className="flex gap-2 items-center bg-purple-300 px-4 py-2 text-white rounded-full font-bold">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
      <CategoriesListView />
    </main>
  );
}
