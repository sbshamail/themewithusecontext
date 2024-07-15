import { NextRequest, NextResponse } from "next/server";

let store: any = { name: "abc" };

export async function GET() {
  // Fetch all posts
  // console.log(store);
  return NextResponse.json(store);
}
export async function POST(request: NextRequest) {
  // Create a new post
  const newPost = await request.json();
  store = newPost;
  return NextResponse.json(newPost, { status: 201 });
}
