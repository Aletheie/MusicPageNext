import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { SongType } from "../../utils/song-type";
import useMusicStore from "@/stores/music-store";
import useSound from "use-sound";
//import axios from "axios";

interface Props {
  song: SongType;
}

const Track = ({ song }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFilledHeart, setIsFilledHeart] = useState(
    song?.isFilledHeart || false
  );
  const [play, { pause }] = useSound(song.songFile.path);
  const { setSong, setIsGlobalPlaying, isGlobalPlaying } = useMusicStore(
    (s) => ({
      setSong: s.setSong,
      setIsGlobalPlaying: s.setIsGlobalPlaying,
      isGlobalPlaying: s.isGlobalPlaying,
    })
  );

  useEffect(() => {
    if (!isGlobalPlaying) {
      setIsPlaying(false);
      pause();
    }
  }, [isGlobalPlaying, pause]);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      setSong(song);
      pause();
      setIsPlaying(false);
      setIsGlobalPlaying();
    } else {
      setSong(song);
      play();
      setIsPlaying(true);
      setIsGlobalPlaying();
    }
  };

  const handleHeartClick = () => {
    setIsFilledHeart(!isFilledHeart);
    // if (song) {
    //   axios
    //     .put(
    //       "http://localhost:8080/songs/",
    //       {
    //         songId: song?._id,
    //         isFilledHeart: !isFilledHeart,
    //       },
    //       { withCredentials: true }
    //     )
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // }
  };

  return (
    <div className=" cursor-pointer w-4/5 md:w-8/12 mt-6 md:mt-4 h-16 rounded-xl bg-[#ededed] hover:bg-[#e7e7e7] flex items-center z-10">
      <div className="bg-[#f4f4f4] w-12 h-12 rounded-lg ml-2 flex justify-center items-center">
        {isPlaying ? (
          <BsFillPauseFill
            className="text-4xl text-[#ededed] hover:text-[#e7e7e7]"
            onClick={handlePlayPauseClick}
          />
        ) : (
          <BsFillPlayFill
            className="text-4xl text-[#ededed] hover:text-[#e7e7e7]"
            onClick={handlePlayPauseClick}
          />
        )}
      </div>
      <div className=" text-sm ml-4">
        <p className="text-black font-semibold">{song.songName}</p>
        <p className="text-gray-700 font-medium">{song.songAuthor}</p>
      </div>
      <div className="ml-auto mr-5">
        <button onClick={handleHeartClick}>
          {isFilledHeart ? (
            <AiFillHeart className="text-2xl text-gray-700" />
          ) : (
            <AiOutlineHeart className="text-2xl text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Track;
