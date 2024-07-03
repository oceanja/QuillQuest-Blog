import { CirclePlus } from "lucide-react";
import Link from "next/link";
import PostListView from "./components/PostListView";

export default function Page() {
  return (
    <main className="p-4 md:p-6 w-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-lg md:text-xl">Posts</h1>
        <Link href="/admin/posts/form">
          <button className="flex gap-2 items-center bg-purple-300 px-3 py-2 md:px-4 md:py-2 text-white rounded-full font-bold text-sm md:text-base">
            <CirclePlus className="h-4 w-4 md:h-5 md:w-5" />
            Add
          </button>
        </Link>
      </div>
      <PostListView />
    </main>
  );
}
