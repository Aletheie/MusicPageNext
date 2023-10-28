import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

interface Body {
  status: string;
  data: {
    user: {
      email: string;
      name: string;
    };
  };
}

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body: Body = await request.json();
  if (body.status === "authenticated") {
    const user = await prisma.user.findUnique({
      where: { email: body.data.user.email },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" });
    }
    const songs = await prisma.song.findMany({
      where: { userId: user.id },
      include: { songFile: true },
    });

    return NextResponse.json(songs);
  } else {
    return NextResponse.json({ error: "User not authenticated" });
  }
}
