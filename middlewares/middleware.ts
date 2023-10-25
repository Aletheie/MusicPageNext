import { NextRequest } from "next/server";

export const config = {
  matcher: "/api/songs",
};

export function middleware(request: NextRequest) {}
