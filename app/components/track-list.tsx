"use client";

import { use, useEffect, useState } from "react";
import Track from "./track";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import useMusicStore from "@/stores/music-store";
import { SongType } from "@/utils/song-type";

const TrackList = () => {
  const { data, status } = useSession();
  const { setGlobalSongList, globalSongList } = useMusicStore((s) => ({
    setGlobalSongList: s.setGlobalSongList,
    globalSongList: s.globalSongList,
  }));

  useEffect(() => {
    axios
      .post<SongType[]>("http://localhost:3000/api/songs", { status, data })
      .then((res) => {
        console.log(res.data);
        setGlobalSongList(res.data);
      })
      .catch((err) => console.log(err));
  }, [data, status, setGlobalSongList]);

  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Tracks</p>
      {globalSongList.length > 1 ? (
        <>
          <Track song={globalSongList[0]} />
          <Track song={globalSongList[1]} />
        </>
      ) : globalSongList.length === 1 ? (
        <>
          <Track song={globalSongList[0]} />
        </>
      ) : (
        <p className="text-gray-700 font-semibold text-xl mt-5">
          No songs found. <br />
          You can add them{" "}
          <Link href="/songs/add" className="text-blue-500">
            here
          </Link>
        </p>
      )}
    </div>
  );
};

export default TrackList;
