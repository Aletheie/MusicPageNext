import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const createNewSong = async () => {
  const newSong = await prisma.user.create({
    data: {
      name: "new song",
      email: "anne@anne.cz",
      passwordHash: "123456",
    },
  });
  console.log(newSong);
};

export function GET(request: NextRequest) {
  createNewSong();
  return NextResponse.json({ message: "Song created", status: 200 });
}
