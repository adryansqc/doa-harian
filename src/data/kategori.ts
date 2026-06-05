import type { Kategori } from "./types";

// ─────────────────────────────────────────────────────────────
// Kalau mau tambah kategori baru:
// 1. Tambah object baru di sini
// 2. Buat file baru di src/data/doa/nama-kategori.ts
// 3. Import file itu di src/data/index.ts
// ─────────────────────────────────────────────────────────────

export const kategoriList: Kategori[] = [
  { id: "pagi",         label: "Doa Pagi Hari" },
  { id: "sore",         label: "Doa Sore Hari" },
  { id: "malam",        label: "Doa Malam & Tidur" },
  { id: "makan",        label: "Doa Makan & Minum" },
  { id: "aktivitas",    label: "Doa Aktivitas Harian" },
  { id: "perlindungan", label: "Doa Perlindungan" },
  { id: "asmaulHusna", label: "Asmaul Husna" },
];
