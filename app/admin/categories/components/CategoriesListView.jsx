"use client";

import { useCategories } from "@/lib/firebase/category/read";
import Link from "next/link";

export default function CategoriesListView() {
  const { data, error, isLoading } = useCategories();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!data) {
    return <h1>Data not found!</h1>;
  }

  return (
    <section className="p-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="border px-2 py-1 md:px-4 md:py-2 bg-purple-100">Sr.No.</th>
              <th className="border px-2 py-1 md:px-4 md:py-2 bg-purple-100">Icon</th>
              <th className="border px-2 py-1 md:px-4 md:py-2 bg-purple-100">Name</th>
              <th className="border px-2 py-1 md:px-4 md:py-2 bg-purple-100">Slug</th>
              <th className="border px-2 py-1 md:px-4 md:py-2 bg-purple-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, key) => (
              <tr key={key}>
                <td className="border px-2 py-1 md:px-4 md:py-2">{key + 1}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  <img className="h-10 w-10 object-cover" src={item?.iconURL} alt="" />
                </td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{item?.name}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">{item?.slug}</td>
                <td className="border px-2 py-1 md:px-4 md:py-2">
                  <Link href={`/admin/categories/form?id=${item?.id}`}>
                    <button className="bg-purple-300 text-white rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm">
                      Action
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
