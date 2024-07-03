import { HomeIcon, LucideScrollText, MessageCircle } from "lucide-react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contacts/AuthContext";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 border-b bg-purple-100">
      <Link href="/">
        <img className="h-16 w-auto sm:h-20" src="/coverr.png" alt="Cover Image" />
      </Link>
      <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-3 sm:mt-0">
        <Link href="/">
          <li className="flex items-center gap-2 text-md sm:text-base font-medium text-gray-800 hover:text-purple-600">
            <HomeIcon />
            Home
          </li>
        </Link>
        <Link href="/categories">
          <li className="flex items-center gap-2 text-md sm:text-base font-medium text-gray-800 hover:text-purple-600">
            <LucideScrollText />
            Categories
          </li>
        </Link>
        <Link href="/contact">
          <li className="flex items-center gap-2 text-md sm:text-base font-medium text-gray-800 hover:text-purple-600">
            <MessageCircle />
            Contact
          </li>
        </Link>
      </ul>
      <AuthContextProvider>
        <div className="mt-3 sm:mt-0">
          <LoginButton />
        </div>
      </AuthContextProvider>
    </nav>
  );
}
