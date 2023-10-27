import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { UserType } from "@/utils/user-type";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body || "no body");
  const { name, email, passwordHash } = body as unknown as UserType;

  if (name) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(passwordHash, salt);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hash,
      },
    });
    return NextResponse.json(newUser);
  } else {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        passwordHash,
        user.passwordHash
      );
      if (isPasswordCorrect) {
        return NextResponse.json(user);
      }
    }
    return NextResponse.next();
  }
}
