"use client";

import { useEffect, useState } from "react";
import Track from "./track";
import { SongType } from "../../utils/song-type";
import Link from "next/link";
// import axios from "axios";

const TrackList = () => {
  const [songList, setSongList] = useState<SongType[]>([
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

  //   useEffect(() => {
  //     axios
  //       .post<SongType[]>("http://localhost:8080/songs", "hii", {
  //         withCredentials: true,
  //       })
  //       .then((res) => setSongList(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Tracks</p>
      {songList.length > 1 ? (
        <>
          <Track song={songList[0]} />
          <Track song={songList[1]} />
        </>
      ) : songList.length === 1 ? (
        <>
          <Track song={songList[0]} />
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
