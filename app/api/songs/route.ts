import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { upload } from "@/cloudinary/index";

const prisma = new PrismaClient();

const dataSource = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(dataSource);
  const todos: any[] = await res.json();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const body = await request.json();
  upload().single("songFile");

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user == null) return NextResponse.json({ message: "User not found" });

  if (!body.songName)
    return NextResponse.json({ message: "Song name is required" });
  if (!body.songAuthor)
    return NextResponse.json({ message: "Song author is required" });
  if (!body.songFile)
    return NextResponse.json({ message: "Song file is required" });

  const newSong = await prisma.song.create({
    data: {
      songName: body.songName,
      songAuthor: user.name,
      songFile: body.songFile,
      isFilledHeart: false,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  console.log(newSong);
}
