"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  return (
    <div className="bg-slate-900 shadow-lg w-full">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <div>
            <Link href="/">
              <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Home</li>
            </Link>
          </div>
          <div className="flex gap-10">
            <Link href="/dashboard">
              <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Dashboard</li>
            </Link>
            {!session ? (
              <>
                <Link href="/login">
                  <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Login</li>
                </Link>
                <Link href="/register">
                  <li className="text-white hover:text-blue-500 cursor-pointer transition duration-300">Register</li>
                </Link>
              </>
            ) : (
              <>
                <li className="text-white">{session.user?.email}</li>
                <li>
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="py-2 px-5 -mt-1 bg-blue-500 rounded-full text-white hover:bg-blue-700 cursor-pointer transition duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;