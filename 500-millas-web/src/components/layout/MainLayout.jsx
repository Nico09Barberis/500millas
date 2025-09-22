import Navbar from "../common/Navbar";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © {new Date().getFullYear()} Mi Empresa - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default MainLayout;
