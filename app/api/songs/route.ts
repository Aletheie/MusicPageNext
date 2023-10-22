import { NextResponse } from "next/server";

const dataSource = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const res = await fetch(dataSource);
  const todos: any[] = await res.json();
  return NextResponse.json(todos);
}
