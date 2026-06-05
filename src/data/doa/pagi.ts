import type { Doa } from "../types";

// ─────────────────────────────────────────────────────────────
// Tambah doa pagi di sini
// Salin salah satu object di bawah sebagai template
// Pastikan "id" unik dan "kategori" diisi "pagi"
// ─────────────────────────────────────────────────────────────

export const doaPagi: Doa[] = [
  {
    id: "doa-bangun-tidur",
    judul: "Doa Bangun Tidur",
    arab: "اَلْحَمْدُ لِلَّهِ الَّذِيْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ",
    latin: "Alhamdulillahil-ladzii ahyaanaa ba'da maa amaatanaa wa ilaihin-nusyuur.",
    artinya: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami dikembalikan.",
    kategori: "pagi",
    waktu: "pagi",
  },
  {
    id: "doa-masuk-kamar-mandi",
    judul: "Doa Masuk Kamar Mandi",
    arab: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ",
    latin: "Allaahumma innii a'uudzu bika minal khubutsi wal khabaaith.",
    artinya: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.",
    kategori: "pagi",
    waktu: "pagi",
  },
];
