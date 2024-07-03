import { PostCard } from "@/app/components/PostListView";
import { getCategory } from "@/lib/firebase/category/read_server";
import { getAllPostsWithCategory } from "@/lib/firebase/posts/read_server";

export default async function Page({ params }) {
    const { categoryId: categoryIdEncoded } = params;
    const categoryId = decodeURI(categoryIdEncoded);
    const posts = await getAllPostsWithCategory(categoryId);
    
    return (
        <main className="p-4 md:p-10">
            <div className="flex flex-col md:flex-row p-2 md:p-5 gap-2 md:gap-3">
                <h1 className="font-bold">Categories /</h1>
                <CategoryCard categoryId={categoryId} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
                {posts?.map((post, key) => (
                    <PostCard post={post} key={key} />
                ))}
            </div>
        </main>
    );
}

async function CategoryCard({ categoryId }) {
    const category = await getCategory(categoryId);
    
    return (
        <div className="flex gap-2 items-center bg-white bg-opacity-60 rounded-full px-2 py-1 border">
            <img className="h-4 w-4 md:h-6 md:w-6 rounded-full object-cover" src={category?.iconURL} alt="" />
            <h4 className="text-xs md:text-sm text-gray-500">{category?.name}</h4>
        </div>
    );
}
