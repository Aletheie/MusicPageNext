// import { MiddlewareFactory } from "@/utils/middleware-factory";
// import { SongType } from "@/utils/song-type";
// import { NextRequest, NextResponse } from "next/server";

// export const checkSongSizet: MiddlewareFactory = () => {
//   return async (request: NextRequest) => {
//     const body: SongType = await request.json();
//     if (body.songFile && body.songFile.size > 5000000) {
//       return NextResponse.json({ message: "Song size is too big" });
//     }
//     return NextResponse.next();
//   };
// };
