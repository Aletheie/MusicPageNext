// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// interface Body {
//   status: string;
//   data: {
//     email: string;
//     name: string;
//   };
//   songName: string;
//   songAuthor: string;
//   path: string;
//   bitRate: number;
//   duration: number;
//   format: string;
// }

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const body: Body = await request.json();
//   if (body.status === "authenticated") {
//     const user = await prisma.user.findUnique({
//       where: { email: body.data.email },
//     });
//     if (!user) {
//       return NextResponse.error();
//     }

//     console.log(body, user);

//     const songFile = await prisma.songFile.create({
//       data: {
//         path: body.path,
//         duration: body.duration,
//         bitRate: body.bitRate,
//         format: body.format,
//       },
//     });

//     const song = await prisma.song.create({
//       data: {
//         songName: body.songName,
//         songAuthor: body.songAuthor,
//         isFilledHeart: false,
//         userId: user.id,
//         songFileId: songFile.id,
//       },
//     });

//     return NextResponse.json(song);
//   } else {
//     return NextResponse.redirect("http://localhost:3000/login");
//   }
// }
