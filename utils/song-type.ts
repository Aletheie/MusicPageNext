export interface SongType {
  songName: string;
  songAuthor: string;
  _id?: string;
  isFilledHeart: boolean;
  songFile: {
    _id?: string;
    duration: number;
    bitRate: number;
    format: string;
    name: string;
    path: string;
  };
}
