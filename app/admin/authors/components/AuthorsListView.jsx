"use client";

import { useAuthors } from "@/lib/firebase/author/read";
import Link from "next/link";

export default function AuthorsListView() {
  const { data, error, isLoading } = useAuthors();
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
    <section className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1 sm:px-4 sm:py-2 bg-purple-100">Sr.No.</th>
            <th className="border px-2 py-1 sm:px-4 sm:py-2 bg-purple-100">Photo</th>
            <th className="border px-2 py-1 sm:px-4 sm:py-2 bg-purple-100">Name</th>
            <th className="border px-2 py-1 sm:px-4 sm:py-2 bg-purple-100">Email</th>
            <th className="border px-2 py-1 sm:px-4 sm:py-2 bg-purple-100">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => {
            return (
              <tr key={item.id}>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{key + 1}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2"><img className="h-10 w-10 object-cover" src={item?.photoURL} alt="" /></td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{item?.name}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{item?.email}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">
                  <Link href={`/admin/authors/form?id=${item?.id}`}>
                    <button className="bg-purple-300 text-white rounded-full px-3 py-1 text-sm">Action</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
