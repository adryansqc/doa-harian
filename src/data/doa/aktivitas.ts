import type { Doa } from "../types";

// ─────────────────────────────────────────────────────────────
// Tambah doa aktivitas harian di sini
// ─────────────────────────────────────────────────────────────

export const doaAktivitas: Doa[] = [
  {
    id: "doa-keluar-rumah",
    judul: "Doa Keluar Rumah",
    arab: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    latin: "Bismillaahi tawakkaltu 'alallaahi wa laa hawla wa laa quwwata illaa billaah.",
    artinya: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan upaya melainkan hanya milik Allah.",
    kategori: "aktivitas",
    waktu: "kapan_saja",
  },
  {
    id: "doa-belajar",
    judul: "Doa Sebelum Belajar",
    arab: "رَبِّ زِدْنِيْ عِلْمًا وَارْزُقْنِيْ فَهْمًا",
    latin: "Rabbi zidnii 'ilman warzuqnii fahmaa.",
    artinya: "Ya Tuhanku, tambahkanlah ilmuku dan berikanlah aku kefahaman.",
    kategori: "aktivitas",
    waktu: "kapan_saja",
  },
];
