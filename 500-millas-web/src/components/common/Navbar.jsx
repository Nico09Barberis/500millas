import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          Mi Empresa
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Inicio
          </Link>
          <Link to="/historia" className="text-gray-700 hover:text-gray-900">
            Nuestra Historia
          </Link>
          <Link to="/productos" className="text-gray-700 hover:text-gray-900">
            Productos
          </Link>
          <Link to="/contacto" className="text-gray-700 hover:text-gray-900">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
