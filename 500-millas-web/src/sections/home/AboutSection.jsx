import logo from "../../assets/images/logo-blanco.png";

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto bg-[#3E3A37] shadow-sm">
        {/* Franja superior */}
        <div className="h-12 w-full bg-[#E6C78E] mb-6"></div>

        <div className="px-6 pb-6 text-center w-full max-w-4xl mx-auto">
          {/* Título */}
          <h2 className="font-dancing text-3xl md:text-4xl font-bold text-[#E6C78E] mb-4">
            Quiénes Somos
          </h2>

          {/* Contenido */}
          <p className="font-dancing text-2xl font-bold text-[#E6C78E] leading-relaxed mb-6">
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
