import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();

    return NextResponse.json(
      { todos: data, message: "Success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
