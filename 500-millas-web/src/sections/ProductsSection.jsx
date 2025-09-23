const ThreeImagesSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-6 text-center">
      {/* Título */}
      <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
        Conoce nuestros productos
      </h2>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 mb-10">
        Conocé más sobre lo que hacemos y nuestra pasión en cada proyecto.
      </p>

      {/* Imágenes con efecto hover */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow group">
          {/* Imagen inicial */}
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Imagen normal"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          {/* Imagen al hover */}
          <img
            src="https://picsum.photos/400/300?random=11"
            alt="Imagen hover"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow group">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Imagen normal"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="https://picsum.photos/400/300?random=12"
            alt="Imagen hover"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Card 3 */}
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow group">
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Imagen normal"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src="https://picsum.photos/400/300?random=13"
            alt="Imagen hover"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeImagesSection;
