import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const menuRef = useRef();

  // Cierre al hacer clic fuera del menú
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Detectar scroll para encoger navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsShrunk(true);
      else setIsShrunk(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${
        isShrunk ? "py-2" : "py-4"
      }`}
    >
      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Hamburger */}
        <div className="flex items-center md:space-x-4">
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Center: Logo */}
        <Link
          to="/"
          className={`flex items-center transition-all duration-300 ${
            isShrunk ? "h-16" : "h-20"
          }`}
        >
          <img
            src={logo}
            alt="Mi Empresa Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-gray-700 hover:text-gray-900" size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-gray-700 hover:text-gray-900" size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Side Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-4 mt-16">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-900 text-lg">
              Inicio
            </Link>
            <Link to="/historia" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-900 text-lg">
              Nuestra Historia
            </Link>
            <Link to="/productos" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-900 text-lg">
              Productos
            </Link>
            <Link to="/contacto" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-900 text-lg">
              Contacto
            </Link>
            <Link to="/como-comprar" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-gray-900 text-lg">
              Como comprar
            </Link>
          </div>
        </div>
      </div>

      {/* Submenu debajo */}
      <div className="bg-white hidden md:flex justify-center space-x-8 py-2">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/historia" className="text-gray-700 hover:text-gray-900">Historia</Link>
        <Link to="/productos" className="text-gray-700 hover:text-gray-900">Productos</Link>
        <Link to="/contacto" className="text-gray-700 hover:text-gray-900">Contacto</Link>
        <Link to="/como-comprar" className="text-gray-700 hover:text-gray-900">Como comprar</Link>
      </div>
    </nav>
  );
}

export default Navbar;
