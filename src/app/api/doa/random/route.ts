import { NextResponse } from "next/server";
import { doaList } from "@/data";

export async function GET() {
  const randomIndex = Math.floor(Math.random() * doaList.length);
  return NextResponse.json({ success: true, data: doaList[randomIndex] });
}
