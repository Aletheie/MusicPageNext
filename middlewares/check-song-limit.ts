import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MiddlewareFactory } from "@/utils/middleware-factory";

const prisma = new PrismaClient();

const userSongCount = async (
  request: Request
): Promise<number | NextResponse<{ message: string }>> => {
  const body = await request.json();
  if (!body.email)
    return NextResponse.json({
      message: "Email is required",
      status: 400,
      error: "Bad Request",
    });

  const userWithSongs = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
    include: {
      Song: true,
    },
  });

  const userSongs = userWithSongs?.Song || [];
  return userSongs.length;
};

export const checkSongLimit: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    try {
      const count = await userSongCount(request);
      if (typeof count === "number" && count >= 5) {
        return NextResponse.json({ message: "Song limit reached" });
      }
      return NextResponse.next();
    } catch (err) {
      console.log(err);
      return NextResponse.json({
        message: "Something went wrong",
        error: err,
        status: 500,
      });
    }
  };
};
