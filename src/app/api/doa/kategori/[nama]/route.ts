import { NextResponse } from "next/server";
import { doaList, kategoriList } from "@/data";

export async function GET(
  _request: Request,
  { params }: { params: { nama: string } }
) {
  const kategoriValid = kategoriList.find((k) => k.id === params.nama);

  if (!kategoriValid) {
    return NextResponse.json(
      {
        success: false,
        message: `Kategori "${params.nama}" tidak ditemukan.`,
        kategori_tersedia: kategoriList.map((k) => k.id),
      },
      { status: 404 }
    );
  }

  const hasil = doaList.filter((d) => d.kategori === params.nama);

  return NextResponse.json({
    success: true,
    kategori: kategoriValid,
    total: hasil.length,
    data: hasil,
  });
}
