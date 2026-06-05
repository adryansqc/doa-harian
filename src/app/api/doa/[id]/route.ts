import { NextResponse } from "next/server";
import { doaList } from "@/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const doa = doaList.find((d) => d.id === params.id);

  if (!doa) {
    return NextResponse.json(
      { success: false, message: `Doa dengan id "${params.id}" tidak ditemukan.` },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: doa });
}
