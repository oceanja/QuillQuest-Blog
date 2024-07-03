import {
  LayoutDashboard,
  LayoutList,
  ListTodo,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <ListTodo />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <User />,
    },
  ];

  return (
    <section className="relative">
      <button
        className="sm:hidden p-2 text-purple-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block absolute sm:relative w-[200px] border-r h-screen p-6 bg-white`}
      >
        <ul className="w-full flex flex-col gap-6">
          {link.map((item) => {
            return (
              <Link href={item.link} key={item.name}>
                <li className="flex gap-3 items-center bg-purple-200 rounded-2xl px-5 py-2 hover:bg-purple-300">
                  {item.icon}
                  <span className="font-bold">{item.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
