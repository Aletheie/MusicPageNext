"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const HeartPage = () => {
  const { status } = useSession();
  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <div className="w-2/3 h-screen mx-auto flex justify-center items-center flex-col">
        <h1 className="text-gray-700 font-bold text-5xl pb-5">
          Všechny {"\u003C"}3 skladby
        </h1>
        <p className="text-gray-700 font-semibold text-2xl">
          Tato funkce bude brzy přidána 🫣
        </p>
        {status === "unauthenticated" && (
          <p className="text-gray-700 font-semibold text-2xl">
            Přihlásit se můžete{" "}
            <Link href="/login" className="text-blue-500">
              zde
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default HeartPage;
