import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna izquierda: Logo/Icono */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              to="/"
            >
              <img
                src={logo}
                alt="Mi Empresa Logo"
                className="h-24 w-32 object-contain"
              />
            </Link>{" "}
            <p className="text-gray-200 font-semibold">Mi Empresa</p>
          </div>

          {/* Columna central: Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-3 text-lg">Navegación</h3>
            <a
              href="#"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              Productos
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Columna derecha: Contacto / Redes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-3 text-lg">Contacto</h3>
            <p className="text-gray-300 mb-2">📧 info@miempresa.com</p>
            <p className="text-gray-300 mb-4">📞 +54 3492 582838</p>
            <div className="flex gap-3">
              {/* Redes como botones circulares */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 hover:bg-green-500 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Mi Empresa - Todos los derechos
          reservados
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
