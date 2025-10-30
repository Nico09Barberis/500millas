import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-blanco.png";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdOutlineWork, MdPhoneIphone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#121212] text-white pt-12 font-caudex font-semibold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna izquierda: Logo/Icono */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src={logo}
              alt="Mi Empresa Logo"
              className="h-34 w-40 object-contain"
            />
          </Link>
        </div>

        {/* Columna central: Links */}
        {/* Columna central: Links de navegación */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="font-bold uppercase mb-3 text-lg">Navegación</h3>

          {/* Inicio */}
          <a
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-1 transition-all duration-300 transform hover:translate-x-2"
          >
            <IoIosArrowForward className="text-lg text-[#F9E79F]" />
            Inicio
          </a>

          {/* Productos */}
          <a
            href="/productos"
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-1 transition-all duration-300 transform hover:translate-x-2"
          >
            <IoIosArrowForward className="text-lg text-[#F9E79F]" />
            Productos
          </a>

          {/* Cómo comprar */}
          <a
            href="/como-comprar"
            className="flex items-center gap-2 text-gray-300 hover:text-white mb-1 transition-all duration-300 transform hover:translate-x-2"
          >
            <IoIosArrowForward className="text-lg text-[#F9E79F]" />
            Cómo comprar
          </a>
        </div>

        {/* Columna derecha: Contacto / Redes */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-bold mb-3 text-lg uppercase">Contacto</h3>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <MdEmail
              className="text-gray-300 text-2xl"
              aria-label="Correo electrónico"
            />
            <a
              href="mailto:alfajores500millas@gmail.com"
              className="hover:underline"
            >
              alfajores500millas@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <MdPhoneIphone
              className="text-gray-300 text-2xl"
              aria-label="Teléfono"
            />
            +54 3492 582838
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5OjN13wZ91Tu4Kz7onGUFzcYkvsOibqi3HEQvoqu3ml7Vaw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 mb-4 hover:underline transition-colors"
          >
            <MdOutlineWork
              className="text-gray-300 text-2xl"
              aria-label="Trabaja con nosotros"
            />
            Trabaja con nosotros
          </a>

          <div className="flex gap-1">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/tucuenta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
            >
              <FaFacebookF className="24" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/500millas__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
            >
              <FaInstagram size={24} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5493492582838"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
            >
              <FaWhatsapp size={24}/>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-black mt-10 py-4 px-2 text-center text-gray-300 font-sans text-sm">
         © Copyright {new Date().getFullYear()} 500 millas | Todos los Derechos Reservados | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
