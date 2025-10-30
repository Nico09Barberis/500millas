import logo from "../../assets/images/logo.png";

const AboutSection = () => {
  return (
    <section className="my-6 md:my-12">
      <div className="relative overflow-hidden bg-white">
        {/* Contenido */}
        <div className="relative text-center w-full max-w-4xl mx-auto px-4 py-6">
          {/* Título */}
          <h2 className="font-tangerine-regular text-5xl md:text-6xl font-bold text-black mb-4">
            Quiénes Somos
          </h2>

          {/* Texto */}
          <p className="font-cormorant-garamond text-xl md:text-2xl font-semibold italic text-black leading-relaxed mb-0 md:mb-8">
            Somos una empresa dedicada a brindar productos totalmente
            artesanales de la más alta calidad, junto con un servicio
            personalizado. Creemos en la atención cercana, la confianza y el
            compromiso con cada uno de nuestros clientes. Nuestra misión es
            ayudarte a encontrar lo que necesitás, acompañándote en cada paso de
            tu compra y asegurando que cada producto refleje el cuidado y la
            dedicación que ponemos en nuestro trabajo.
          </p>

          {/* Imagen */}
          <div className="hidden md:flex justify-center">
            <img src={logo} alt="Logo de la empresa" className="w-24 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
