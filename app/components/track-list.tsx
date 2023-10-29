"use client";

import { useEffect } from "react";
import Track from "./track";
import Link from "next/link";
// import axios from "axios";
// import { useSession } from "next-auth/react";
import useMusicStore from "@/stores/music-store";
import { SongType } from "@/utils/song-type";

const TrackList = () => {
  //const { data, status } = useSession();
  const { setGlobalSongList, globalSongList } = useMusicStore((s) => ({
    setGlobalSongList: s.setGlobalSongList,
    globalSongList: s.globalSongList,
  }));

  const defaultSong: SongType = {
    songName: "Ukázková skladba",
    songAuthor: "forest lullaby",
    _id: "uhfoiwrubfi",
    isFilledHeart: false,
    songFile: {
      _id: "uhfoiwrubfi",
      duration: 0,
      bitRate: 0,
      format: "",
      name: "Ukázková skladba",
      path: "https://res.cloudinary.com/dgj3s3q6m/video/upload/v1698518884/MusicPage/forest-lullaby-110624_ugrsfv.mp3",
    },
  };

  const defaultSong2: SongType = {
    songName: "Ukázková skladba 2",
    songAuthor: "Winning Elevation",
    _id: "uhfoferubfi",
    isFilledHeart: false,
    songFile: {
      _id: "uhfoiefubfi",
      duration: 0,
      bitRate: 0,
      format: "",
      name: "Ukázková skladba",
      path: "https://res.cloudinary.com/dgj3s3q6m/video/upload/v1698585341/MusicPage/winning_qcaqsi.mp3",
    },
  };

  useEffect(() => {
    setGlobalSongList([defaultSong, defaultSong2]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setGlobalSongList]);

  // useEffect(() => {
  //   axios
  //     .post<SongType[]>("http://localhost:3000/api/songs", { status, data })
  //     .then((res) => {
  //       console.log(res.data);
  //       setGlobalSongList(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [data, status, setGlobalSongList]);

  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Skladby</p>
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
          Nenalezeny žádné skladby <br />
          Můžete je přidat{" "}
          <Link href="/songs/add" className="text-blue-500">
            zde
          </Link>
        </p>
      )}
    </div>
  );
};

export default TrackList;
