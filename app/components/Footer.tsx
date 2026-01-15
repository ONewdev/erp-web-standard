export default function Footer() {
  return (
    <footer
      style={{
        padding: "16px 24px",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
        opacity: 0.85,
      }}
    >
      {/* ซ้าย */}
      <div>
        <strong>Copyright</strong> Business Competitive Intelligence Co., Ltd. ©
        2014–{new Date().getFullYear()}
      </div>

      {/* ขวา */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <a
          href="/privacypolicy"
          style={{ fontWeight: 600, textDecoration: "none" }}
        >
          Privacy Policy
        </a>

        <a
          href="https://www.facebook.com/q.soft/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
          }}
          aria-label="Facebook"
        >
          {/* ใช้ Font Awesome ได้ถ้ามี */}
          <i className="fa fa-facebook" />
          {/* หรือใช้ emoji แทนถ้ายังไม่ลง FA */}
          {/* 📘 */}
        </a>
      </div>
    </footer>
  );
}
