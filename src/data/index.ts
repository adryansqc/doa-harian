// ─────────────────────────────────────────────────────────────
// File ini menggabungkan semua data doa dari setiap kategori.
//
// Kalau mau tambah kategori baru:
// 1. Buat file baru di src/data/doa/nama-kategori.ts
// 2. Import di sini dan tambahkan ke doaList
// 3. Tambah juga di src/data/kategori.ts
// ─────────────────────────────────────────────────────────────

import { doaPagi }        from "./doa/pagi";
import { doaSore }        from "./doa/sore";
import { doaMalam }       from "./doa/malam";
import { doaMakan }       from "./doa/makan";
import { doaAktivitas }   from "./doa/aktivitas";
import { doaPerlindungan } from "./doa/perlindungan";
import { doaAsmaulHusna } from "./doa/asmaulHusna";

export { kategoriList } from "./kategori";
export type { Doa, Kategori } from "./types";

export const doaList = [
  ...doaAsmaulHusna,
  ...doaPagi,
  ...doaSore,
  ...doaMalam,
  ...doaMakan,
  ...doaAktivitas,
  ...doaPerlindungan,

  // Tambah kategori baru di sini:
  // ...doaSakit,
  // ...doaPerjalanan,
];
