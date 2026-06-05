export type Doa = {
  id: string;
  judul: string;
  arab: string;
  latin: string;
  artinya: string;
  kategori: string;
  waktu?: "pagi" | "sore" | "malam" | "kapan_saja";
};

export type Kategori = {
  id: string;
  label: string;
};
