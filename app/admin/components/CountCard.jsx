"use client"

import useCollectionCount from "@/lib/firebase/count"

export default function CountCard({ path, name, icon }) {
  const { data, isLoading, error } = useCollectionCount({ path: path });
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="flex flex-col sm:flex-row gap-2 bg-purple-100 items-center rounded px-8 py-4 sm:px-8 sm:py-2">
      {icon}
      <div className="text-center sm:text-left">
        <h1 className="font-bold text-lg sm:text-base">{name}</h1>
        <h2 className="text-xl font-bold">{data}</h2>
      </div>
    </div>
  );
}
