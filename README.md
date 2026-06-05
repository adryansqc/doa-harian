# 🕌 Doa Harian API

REST API kumpulan doa-doa Islam harian. Dibangun dengan **Next.js**, di-hosting di **Vercel**, tanpa database.

---

## 📁 Struktur Data

```
src/data/
├── index.ts          ← gabungkan semua (jangan diubah)
├── types.ts          ← tipe data Doa & Kategori
├── kategori.ts       ← daftar kategori
└── doa/
    ├── pagi.ts
    ├── sore.ts
    ├── malam.ts
    ├── makan.ts
    ├── aktivitas.ts
    ├── perlindungan.ts
    └── (tambah file baru di sini)
```

---

## ➕ Cara Tambah Doa

Buka file sesuai kategorinya, misal `src/data/doa/pagi.ts`, lalu tambahkan object baru:

```ts
{
  id: "doa-contoh",        // ID unik, huruf kecil, pakai tanda -
  judul: "Nama Doa",
  arab: "النص العربي",
  latin: "Teks latin...",
  artinya: "Artinya...",
  kategori: "pagi",        // harus sama dengan nama file
  waktu: "pagi",           // pagi | sore | malam | kapan_saja
},
```

---

## ➕ Cara Tambah Kategori Baru

Contoh: mau tambah kategori **"sakit"**

**Langkah 1** — Buat file `src/data/doa/sakit.ts`:
```ts
import type { Doa } from "../types";

export const doaSakit: Doa[] = [
  {
    id: "doa-orang-sakit",
    judul: "Doa untuk Orang Sakit",
    arab: "...",
    latin: "...",
    artinya: "...",
    kategori: "sakit",
    waktu: "kapan_saja",
  },
];
```

**Langkah 2** — Daftarkan di `src/data/kategori.ts`:
```ts
{ id: "sakit", label: "Doa Orang Sakit" },
```

**Langkah 3** — Import di `src/data/index.ts`:
```ts
import { doaSakit } from "./doa/sakit";

export const doaList = [
  // ... yang sudah ada
  ...doaSakit,  // ← tambahkan di sini
];
```

Selesai! API otomatis mengenali kategori baru.

---

## 📡 Endpoints

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/doa` | Semua doa |
| GET | `/api/doa?kategori=pagi` | Filter by kategori |
| GET | `/api/doa?q=tidur` | Cari by keyword |
| GET | `/api/doa/:id` | Doa by ID |
| GET | `/api/doa/kategori/:nama` | Doa by kategori |
| GET | `/api/doa/random` | Doa acak |

---

## 🚀 Deploy ke Vercel

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import project
3. Klik **Deploy** — selesai!

## 💻 Run Lokal

```bash
npm install
npm run dev
```
