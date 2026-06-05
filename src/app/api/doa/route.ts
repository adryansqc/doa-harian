import { NextResponse } from "next/server";
import { doaList, kategoriList } from "@/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const kategori = searchParams.get("kategori");
  const search = searchParams.get("q");

  let hasil = [...doaList];

  if (kategori) {
    hasil = hasil.filter((d) => d.kategori === kategori);
  }

  if (search) {
    const keyword = search.toLowerCase();
    hasil = hasil.filter(
      (d) =>
        d.judul.toLowerCase().includes(keyword) ||
        d.artinya.toLowerCase().includes(keyword) ||
        d.latin.toLowerCase().includes(keyword)
    );
  }

  return NextResponse.json({
    success: true,
    total: hasil.length,
    kategori_tersedia: kategoriList,
    data: hasil,
  });
}
