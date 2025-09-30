import logo from "../../assets/images/logo-blanco.png";

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto bg-[#302e2c] shadow-sm">
        {/* Franja superior */}
        <div className="h-12 w-full bg-[#E6C977] mb-6"></div>

        <div className="px-6 pb-6 text-center w-full max-w-4xl mx-auto">
          {/* Título */}
          <h2 className="font-tangerine-regular text-3xl md:text-6xl font-bold text-white mb-4">
            Quiénes Somos
          </h2>

          {/* Contenido */}
          <p className="font-cormorant-garamond text-lg md:text-2xl font-semibold italic text-white leading-relaxed mb-6">
            Somos una empresa dedicada a brindar productos de calidad y un servicio
            personalizado. Creemos en la atención cercana, la confianza y el compromiso
            con cada uno de nuestros clientes. Nuestra misión es ayudarte a encontrar lo
            que necesitás, acompañándote en cada paso de tu compra.
          </p>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo de la emrpresa"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
