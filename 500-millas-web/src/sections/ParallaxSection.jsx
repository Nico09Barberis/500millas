const ParallaxSection = () => {
  return (
    <section
      className="relative h-[500px] bg-fixed bg-center bg-cover flex items-end justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido abajo */}
      <div className="relative text-center bg-gradient-to-b from-[#C19A6B] to-white text-black px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">Título Destacado</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Este es un ejemplo de sección con efecto parallax y contenido abajo.
        </p>
        <a
          href="#"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Llamada a la acción
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
