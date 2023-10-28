import { create } from "zustand";
import { SongType } from "../utils/song-type";

interface Store {
  isGlobalPlaying: boolean;
  song: SongType;
  globalSongList: SongType[];
  setIsGlobalPlaying: () => void;
  setSong: (song: SongType) => void;
  setGlobalSongList: (songList: SongType[]) => void;
}

const useMusicStore = create<Store>((set) => ({
  isGlobalPlaying: false,
  song: {
    songName: "",
    songAuthor: "",
    _id: "",
    isFilledHeart: false,
    songFile: {
      _id: "",
      duration: 0,
      bitRate: 0,
      format: "",
      name: "",
      path: "",
    },
  },
  globalSongList: [],
  setIsGlobalPlaying: () =>
    set((state) => ({ isGlobalPlaying: !state.isGlobalPlaying })),
  setSong: (song) => set(() => ({ song })),
  setGlobalSongList: (songList) => set(() => ({ globalSongList: songList })),
}));

export default useMusicStore;
