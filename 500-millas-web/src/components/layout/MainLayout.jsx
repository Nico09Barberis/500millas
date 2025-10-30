import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../navigation/Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTopButton from "../common/ScrollTopButton";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <WhatsAppButton />

      <ScrollToTopButton />

      <Footer />
    </div>
  );
}

export default MainLayout;
