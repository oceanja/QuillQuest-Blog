import { getAuthor } from "@/lib/firebase/author/read_server";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getAllPosts } from "@/lib/firebase/posts/read_server";
import Link from "next/link";

export default async function PostListView() {
  const posts = await getAllPosts();
  if (!posts) {
    return (
      <div>
        <h3>Posts Not Available!</h3>
      </div>
    );
  }

  return (
    <section className="p-4 sm:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {posts?.map((post, key) => {
          return <PostCard post={post} key={key} />;
        })}
      </div>
    </section>
  );
}

export function PostCard({ post }) {
  return (
    <Link href={`/posts/${post?.id}`}>
      <div className="flex flex-col gap-3 p-5">
        <div className="relative">
          <div className="absolute flex justify-end w-full p-3">
            <CategoryCard categoryId={post?.categoryId} />
          </div>
          <img
            className="h-[200px] w-full object-cover rounded-lg"
            src={post?.imageURL}
            alt=""
          />
        </div>
        <h1 className="font-bold text-lg">{post?.title}</h1>
        <div className="flex justify-between items-center">
          <AuthorCard authorId={post?.authorId} />
          <h5 className="text-xs text-gray-500">
            {post?.timestamp?.toDate()?.toLocaleDateString()}
          </h5>
        </div>
      </div>
    </Link>
  );
}

async function AuthorCard({ authorId }) {
  const author = await getAuthor(authorId);
  return (
    <div className="flex gap-2 items-center">
      <img
        className="h-6 w-6 rounded-full object-cover"
        src={author?.photoURL}
        alt=""
      />
      <h4 className="text-sm text-gray-500">{author?.name}</h4>
    </div>
  );
}

async function CategoryCard({ categoryId }) {
  const category = await getCategory(categoryId);
  return (
    <div className="flex gap-2 items-center bg-white bg-opacity-75 rounded-full px-2 py-1">
      <img
        className="h-6 w-6 rounded-full object-cover"
        src={category?.iconURL}
        alt=""
      />
      <h4 className="text-xs text-gray-500">{category?.name}</h4>
    </div>
  );
}
