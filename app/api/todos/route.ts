import { getTodos } from "@/app/home/page";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getTodos();
    
    return NextResponse.json(
      { todos: data, message: "Success" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
