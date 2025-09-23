const BuySection = () => {
  return (
    <section className="w-full mx-auto max-w-4xl py-12">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Compra por categoria
      </h2>

      {/* Contenedor de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Imagen 1 */}
        <div className="relative h-64  overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Imagen 1"
            className="w-full h-full object-cover"
          />
          {/* Botón dentro de la imagen */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <a
              href="/apartado1"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
            >
              Ir a apartado 1
            </a>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="relative h-64 overflow-hidden shadow-2xl">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Imagen 2"
            className="w-full h-full object-cover"
          />
          {/* Botón dentro de la imagen */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <a
              href="/apartado2"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
            >
              Ir a apartado 2
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BuySection;
