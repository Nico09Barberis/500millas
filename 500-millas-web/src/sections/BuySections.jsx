const BuySection = () => {
  return (
    <section className="bg-gray-300 py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-ancois-one uppercase text-center mb-12">
          Compra por categoría
        </h2>

        {/* Contenedor de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Imagen 1 */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl group">
            <img
              src="https://picsum.photos/600/400?random=1"
              alt="Imagen 1"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Botón dentro de la imagen */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a
                href="/apartado1"
                aria-label="Ir a Alfajores"
                className="px-6 py-2 border-2 border-[#5C4033] bg-transparent font-bebas text-lg sm:text-xl uppercase tracking-widest text-[#5C4033] hover:bg-[#5C4033] hover:text-[#E6C78E] font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Alfajores
              </a>
            </div>
          </div>

          {/* Imagen 2 */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-2xl group">
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Imagen 2"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Botón dentro de la imagen */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <a
                href="/apartado2"
                aria-label="Ir a Galletas"
                className="px-6 py-2 border-2 border-[#5C4033] bg-transparent font-bebas text-lg sm:text-xl uppercase tracking-widest text-[#5C4033] hover:bg-[#5C4033] hover:text-[#E6C78E] font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Galletas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
