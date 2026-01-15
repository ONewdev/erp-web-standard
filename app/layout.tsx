import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import "font-awesome/css/font-awesome.min.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "ERP Enterprise Resource Planning To THAILAND",
  description: "Business Competitive Intelligence",
  icons: {
    icon: "/img/bci_logo.png",
    shortcut: "/img/bci_logo.png",
  },
};

/**
 * Root Layout
 * This is the minimal root layout that only provides html/body structure
 * Specific layouts (user/admin) are handled by route groups
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className="font-kanit">{children}</body>
    </html>
  );
}
