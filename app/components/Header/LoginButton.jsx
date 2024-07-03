"use client";

import { useAuth } from "@/lib/contacts/AuthContext";
import Link from 'next/link';

export default function LoginButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } = useAuth();
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  if (user) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-3xl"
        >
          Logout
        </button>
        <Link href='/admin'>
          <div className="flex gap-4 rounded-xl bg-purple-200 px-3 py-2 items-center">
            <img className="object-cover h-10 w-10 sm:h-12 sm:w-12 rounded-full" src={user?.photoURL} alt="" />
            <div className="text-center sm:text-left">
              <h1 className="font-bold">{user?.displayName}</h1>
              <h1 className="text-sm text-gray-500">{user?.email}</h1>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <section className="flex justify-center sm:justify-start">
      <button
        onClick={handleSignInWithGoogle}
        className="flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-3xl"
      >
        <img className="h-7" src="/google.png" alt="Google Logo" />
        Login With Google
      </button>
    </section>
  );
}
