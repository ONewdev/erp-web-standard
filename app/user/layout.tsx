import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

/**
 * User Layout
 * This layout wraps all user-facing pages with Navbar and Footer
 * Route group (user) ensures this doesn't affect admin routes
 */
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "24px" }}>{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
