import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "ERP Enterprise Resource Planning To THAILAND",
  description: "Business Competitive Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="font-kanit">
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "24px" }}>
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
