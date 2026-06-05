import type { Doa } from "../types";

// ─────────────────────────────────────────────────────────────
// Tambah doa makan & minum di sini
// ─────────────────────────────────────────────────────────────

export const doaMakan: Doa[] = [
  {
    id: "doa-sebelum-makan",
    judul: "Doa Sebelum Makan",
    arab: "اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    latin: "Allaahumma baarik lanaa fiimaa razaqtanaa wa qinaa 'adzaaban naar.",
    artinya: "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan dan jauhkan kami dari azab neraka.",
    kategori: "makan",
    waktu: "kapan_saja",
  },
  {
    id: "doa-sesudah-makan",
    judul: "Doa Sesudah Makan",
    arab: "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِيْنَ",
    latin: "Alhamdulillahil-ladzii ath'amanaa wa saqaanaa wa ja'alanaa minal muslimiin.",
    artinya: "Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami termasuk orang-orang Muslim.",
    kategori: "makan",
    waktu: "kapan_saja",
  },
];
