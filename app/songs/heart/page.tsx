"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const HeartPage = () => {
  const { status } = useSession();
  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <div className="w-2/3 h-screen mx-auto flex justify-center items-center flex-col">
        <h1 className="text-gray-700 font-bold text-5xl pb-5">
          All {"\u003C"}3 Songs
        </h1>
        <p className="text-gray-700 font-semibold text-2xl">
          This feature will be added soon 🫣
        </p>
        {status === "unauthenticated" && (
          <p className="text-gray-700 font-semibold text-2xl">
            You can login{" "}
            <Link href="/login" className="text-blue-500">
              here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HeartPage;
