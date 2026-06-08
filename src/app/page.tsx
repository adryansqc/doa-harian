import { doaList, kategoriList } from "@/data";

export default function Home() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/doa",
      desc: "Ambil semua doa",
      example: "/api/doa",
    },
    {
      method: "GET",
      path: "/api/doa?kategori=pagi",
      desc: "Filter doa by kategori",
      example: "/api/doa?kategori=pagi",
    },
    {
      method: "GET",
      path: "/api/doa?q=tidur",
      desc: "Cari doa by keyword",
      example: "/api/doa?q=tidur",
    },
    {
      method: "GET",
      path: "/api/doa/[id]",
      desc: "Ambil satu doa by ID",
      example: "/api/doa/doa-sebelum-tidur",
    },
    {
      method: "GET",
      path: "/api/doa/kategori/[nama]",
      desc: "Ambil doa berdasarkan kategori",
      example: "/api/doa/kategori/makan",
    },
    {
      method: "GET",
      path: "/api/doa/random",
      desc: "Ambil satu doa secara acak",
      example: "/api/doa/random",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0f1e",
        color: "#e8dcc8",
        fontFamily: "'Georgia', serif",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #0d1b2a 100%)",
          borderBottom: "1px solid #2a3a5c",
          padding: "60px 40px 40px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212,175,55,0.05) 0%, transparent 50%)",
          }}
        />
        <p
          style={{
            fontSize: "26px",
            color: "#d4af37",
            marginBottom: "12px",
            letterSpacing: "8px",
            position: "relative",
          }}
        >
          ﷽
        </p>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#f0e6cc",
            margin: "0 0 8px",
            position: "relative",
            letterSpacing: "1px",
          }}
        >
          Doa Harian API
        </h1>
        <p
          style={{
            color: "#8899bb",
            fontSize: "15px",
            margin: "0 0 24px",
            position: "relative",
          }}
        >
          REST API kumpulan doa-doa Islam harian • Gratis & tanpa autentikasi
        </p>
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            position: "relative",
          }}
        >
          <span
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#d4af37",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            {doaList.length} Doa
          </span>
          <span
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#d4af37",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            {kategoriList.length} Kategori
          </span>
          <span
            style={{
              background: "rgba(100,200,100,0.1)",
              border: "1px solid rgba(100,200,100,0.3)",
              color: "#6dc46d",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "13px",
            }}
          >
            ✓ No Auth
          </span>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Base URL */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Base URL
          </h2>
          <div
            style={{
              background: "#111827",
              border: "1px solid #1e2d45",
              borderRadius: "10px",
              padding: "16px 20px",
              fontFamily: "monospace",
              fontSize: "15px",
              color: "#7dd3fc",
              wordBreak: "break-all",
            }}
          >
            {process.env.NEXT_PUBLIC_BASE_URL ?? "https://doa-harian-opal.vercel.app"}
          </div>
        </section>

        {/* Endpoints */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Endpoints
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {endpoints.map((ep, i) => (
              <div
                key={i}
                style={{
                  background: "#111827",
                  border: "1px solid #1e2d45",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    background: "rgba(212,175,55,0.15)",
                    color: "#d4af37",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {ep.method}
                </span>
                <div style={{ flex: 1 }}>
                  <code
                    style={{
                      color: "#7dd3fc",
                      fontSize: "14px",
                      fontFamily: "monospace",
                    }}
                  >
                    {ep.path}
                  </code>
                  <p
                    style={{
                      color: "#6b7a99",
                      fontSize: "13px",
                      margin: "4px 0 0",
                    }}
                  >
                    {ep.desc}
                  </p>
                </div>
                <a
                  href={ep.example}
                  target="_blank"
                  style={{
                    color: "#4a9eff",
                    fontSize: "12px",
                    textDecoration: "none",
                    flexShrink: 0,
                    marginTop: "3px",
                    opacity: 0.7,
                  }}
                >
                  Coba →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Kategori */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Kategori Tersedia
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            {kategoriList.map((k) => (
              <a
                key={k.id}
                href={`/api/doa/kategori/${k.id}`}
                target="_blank"
                style={{
                  background: "#111827",
                  border: "1px solid #1e2d45",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
              >
                <p style={{ color: "#7dd3fc", fontFamily: "monospace", fontSize: "13px", margin: "0 0 4px" }}>
                  {k.id}
                </p>
                <p style={{ color: "#6b7a99", fontSize: "12px", margin: 0 }}>
                  {k.label}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contoh Response */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Contoh Response
          </h2>
          <div
            style={{
              background: "#0d1117",
              border: "1px solid #1e2d45",
              borderRadius: "10px",
              padding: "20px",
              fontFamily: "monospace",
              fontSize: "13px",
              lineHeight: "1.7",
              overflowX: "auto",
            }}
          >
            <pre style={{ margin: 0, color: "#e8dcc8" }}>
              {JSON.stringify(
                {
                  success: true,
                  data: {
                    id: "doa-sebelum-makan",
                    judul: "Doa Sebelum Makan",
                    arab: "اللَّهُمَّ بَارِكْ لَنَا...",
                    latin: "Allaahumma baarik lanaa...",
                    artinya: "Ya Allah, berkahilah kami...",
                    kategori: "makan",
                    waktu: "kapan_saja",
                  },
                },
                null,
                2
              )}
            </pre>
          </div>
        </section>

        {/* Android Retrofit Contoh */}
        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Contoh di Android (Retrofit)
          </h2>
          <div
            style={{
              background: "#0d1117",
              border: "1px solid #1e2d45",
              borderRadius: "10px",
              padding: "20px",
              fontFamily: "monospace",
              fontSize: "13px",
              lineHeight: "1.7",
              overflowX: "auto",
            }}
          >
            <pre style={{ margin: 0, color: "#a8d8a8" }}>
{`interface DoaApiService {
    @GET("api/doa")
    suspend fun getAllDoa(): Response<DoaResponse>

    @GET("api/doa/{id}")
    suspend fun getDoaById(
        @Path("id") id: String
    ): Response<DoaDetailResponse>

    @GET("api/doa/kategori/{nama}")
    suspend fun getDoaByKategori(
        @Path("nama") kategori: String
    ): Response<DoaResponse>

    @GET("api/doa/random")
    suspend fun getRandomDoa(): Response<DoaDetailResponse>
}`}
            </pre>
          </div>
        </section>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            color: "#3a4a6a",
            fontSize: "13px",
            paddingTop: "20px",
            borderTop: "1px solid #1a2233",
          }}
        >
          <p>Dibuat dengan Next.js • Di-hosting di Vercel</p>
          <p style={{ marginTop: "4px", color: "#d4af37", fontSize: "16px" }}>
            بَارَكَ اللَّهُ فِيكُمْ
          </p>
        </div>
      </div>
    </main>
  );
}
