import logo from "../../assets/images/logo-blanco.png";
import fondo from "../../assets/images/about.jpeg"; // tu imagen de fondo

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div
        className="relative max-w-5xl mx-auto shadow-sm rounded-3xl overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fondo})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Contenido */}
        <div className="relative text-center w-full max-w-4xl mx-auto px-4 py-4">
          {/* Título */}
          <h2 className="font-tangerine-regular text-5xl md:text-6xl font-bold text-white mb-4">
            Quiénes Somos
          </h2>

          {/* Texto */}
          <p className="font-cormorant-garamond text-xl md:text-2xl font-semibold italic text-white leading-relaxed mb-0 md:mb-8">
            Somos una empresa dedicada a brindar productos de calidad y un servicio
            personalizado. Creemos en la atención cercana, la confianza y el compromiso
            con cada uno de nuestros clientes. Nuestra misión es ayudarte a encontrar lo
            que necesitás, acompañándote en cada paso de tu compra.
          </p>

          {/* Imagen */}
          <div className="hidden md:flex justify-center">
            <img
              src={logo}
              alt="Logo de la empresa"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
