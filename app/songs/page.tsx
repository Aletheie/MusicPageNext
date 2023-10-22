"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Track from "@/app/components/track";
import { SongType } from "@/utils/song-type";
import Link from "next/link";
//import useMusicStore from "../stores/musicStore";

const Songs = () => {
  const [songList, setSongList] = useState<SongType[]>([]);
  const [globalSongList, setGlobalSongList] = useState<SongType[]>([
    {
      songName: "hello",
      songAuthor: "hello",
      isFilledHeart: false,
      songFile: {
        name: "hello",
        type: "hello",
        path: "hello",
      },
    },
    {
      songName: "hello 2",
      songAuthor: "hello",
      isFilledHeart: false,
      songFile: {
        name: "hello",
        type: "hello",
        path: "hello",
      },
    },
  ]);
  //   const { setGlobalSongList } = useMusicStore((s) => ({
  //     setGlobalSongList: s.setGlobalSongList,
  //   }));

  //   useEffect(() => {
  //     axios
  //       .post<SongType[]>("http://localhost:8080/songs", "hii", {
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         setSongList(res.data);
  //         setGlobalSongList(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <div className="w-2/3 h-screen mx-auto flex justify-center items-center flex-col">
        <h1 className="text-gray-700 font-bold text-5xl pb-5">All Songs</h1>
        {songList.map((song, idx) => (
          <Track key={idx} song={song} />
        ))}
        {songList.length === 0 && (
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
