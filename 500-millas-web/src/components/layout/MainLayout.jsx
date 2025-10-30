import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../navigation/Footer";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
