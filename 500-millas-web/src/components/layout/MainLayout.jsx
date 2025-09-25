import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import logo from "../../assets/images/logo-blanco.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <footer className="bg-[#121212] text-white pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna izquierda: Logo/Icono */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src={logo}
                alt="Mi Empresa Logo"
                className="h-34 w-40 object-contain"
              />
            </Link>{" "}
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
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <MdEmail
                className="text-gray-300 text-lg"
                aria-label="Correo electrónico"
              />
              info@miempresa.com
            </p>

            {/* Teléfono */}
            <p className="flex items-center gap-2 text-gray-300 mb-4">
              <FaSquarePhone
                className="text-gray-300 text-lg"
                aria-label="Teléfono"
              />
              +54 3492 582838
            </p>
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
        <div className="bg-black mt-10 py-8 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Mi Empresa - Todos los derechos
          reservados
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
