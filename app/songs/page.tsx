"use client";

import Track from "@/app/components/track";
import Link from "next/link";
import useMusicStore from "@/stores/music-store";
//import useMusicStore from "../stores/musicStore";

const Songs = () => {
  const { globalSongList } = useMusicStore((s) => ({
    setGlobalSongList: s.setGlobalSongList,
    globalSongList: s.globalSongList,
  }));

  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <div className="w-2/3 h-screen mx-auto flex justify-center items-center flex-col">
        <h1 className="text-gray-700 font-bold text-5xl pb-5">All Songs</h1>
        {globalSongList.map((song, idx) => (
          <Track key={idx} song={song} />
        ))}
        {globalSongList.length === 0 && (
          <p className="text-gray-700 font-semibold text-2xl">
            No songs found. You can add them{" "}
            <Link href="/songs/add" className="text-blue-500">
              here
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default Songs;
