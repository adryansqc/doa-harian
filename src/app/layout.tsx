import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doa Harian API",
  description: "REST API kumpulan doa-doa Islam harian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
