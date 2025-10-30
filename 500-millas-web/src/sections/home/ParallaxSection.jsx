const ParallaxSection = () => {
  return (
    <section
      className="relative h-[500px] bg-fixed bg-center bg-cover flex items-end justify-center"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido abajo */}
      <div className="relative text-center w-full max-w-4xl mx-auto bg-gradient-to-b from-[#C19A6B] to-white text-[#4F4540] px-6 py-12">
        <h2 className="font-caudex text-3xl md:text-5xl font-bold mb-4">
          Alfajores 500 Millas
        </h2>
        <p className="font-dancing text-3xl max-w-2xl font-bold mx-auto mb-6">
          tradición santafesina en cada bocado.
        </p>
        <a
          href="/productos"
          className="inline-block px-6 py-3 border-2 border-[#4F4540] bg-transparent hover:bg-[#4F4540] font-bebas text-xl uppercase tracking-widest text-[#5C4033] hover:text-[#E6C78E] font-semibold transition-colors duration-200"
        >
          comprar
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
