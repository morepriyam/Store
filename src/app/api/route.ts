import { NextResponse } from "next/server";
import {} from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    hello: "store",
  });
}
