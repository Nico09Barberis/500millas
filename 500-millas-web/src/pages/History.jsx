import img1 from "../assets/images/imgFormSection.png";
import img2 from "../assets/images/imgFormSection.png"; // reemplazá con otra imagen real
import img3 from "../assets/images/imgFormSection.png"; // reemplazá con otra imagen real
import bgImg from "../assets/images/history.jpeg";
import WhatsAppButton from "../components/common/WhatsAppButton";

const History = () => {
  const sections = [
    {
      title: "Nuestros Comienzos",
      text: "Desde nuestros inicios, trabajamos con esfuerzo y dedicación para llevar productos de la más alta calidad a cada rincón del país, asegurándonos de que cada cliente reciba lo mejor.",
      text2:
        "Lo que comenzó como un proyecto familiar con sueños y aspiraciones, hoy se ha transformado en una empresa consolidada que se enorgullece de sus raíces y valores.",
      text3:
        "Cada paso que dimos estuvo guiado por la pasión por lo que hacemos y el deseo de generar un impacto positivo en nuestra comunidad.",
      image: img1,
    },
    {
      title: "Nuestro Crecimiento",
      text: "A lo largo de los años, nuestra empresa ha logrado expandirse y llegar a más clientes, siempre manteniendo la esencia que nos distingue: innovación, calidad y compromiso.",
      text2:
        "El crecimiento no solo se mide en cifras, sino en la confianza que nuestros clientes y colaboradores depositan en nosotros día a día.",
      text3:
        "Cada logro ha sido fruto del trabajo conjunto, la creatividad y la capacidad de adaptarnos a un mercado en constante cambio.",
      image: img2,
    },
    {
      title: "Nuestra Visión",
      text: "Miramos al futuro con entusiasmo, buscando crecer junto a quienes confían en nosotros y creando experiencias significativas para nuestros clientes.",
      text2:
        "Nuestra visión se basa en la dedicación, el trabajo en equipo y la innovación constante, pilares que nos permiten enfrentar cualquier desafío con seguridad.",
      text3:
        "Aspiramos a ser referentes en nuestro sector, impulsando proyectos que generen valor y contribuyan al bienestar de nuestra comunidad y del medio ambiente.",
      image: img3,
    },
  ];

  return (
    <section
      className="relative md:py-24 md:px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay cálido en lugar de negro puro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#2b1b0e]/70 to-black/60 pointer-events-none"></div>

      <div
        className="relative max-w-4xl p-4 rounded-none md:rounded-lg mx-auto mt-28 md:mt-28 
        bg-gradient-to-b from-[#f0efe8] via-[#fdf6e3] to-[#e6c78e]"
      >
        {/* Título central */}
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 tracking-wide mb-20 relative">
          <span className="font-tangerine-bold relative z-10">
            Nuestra Historia
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-32 h-[4px] bg-gradient-to-r from-[#e6c78e] to-[#d4af37] rounded-full"></span>
        </h1>

        {/* Secciones */}
        <div className="flex flex-col gap-12">
          {sections.map((sec, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-500 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Imagen */}
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="md:w-1/2 p-6 text-center md:text-start">
                <h2 className="font-caudex text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {sec.title}
                </h2>
                <p className="font-caudex font-semibold text-lg text-gray-800 leading-relaxed mb-4">
                  {sec.text}
                </p>
                <p className="font-caudex font-semibold text-lg text-gray-800 leading-relaxed mb-4">
                  {sec.text2}
                </p>
                <p className="font-caudex font-semibold text-lg text-gray-800 leading-relaxed">
                  {sec.text3}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhatsAppButton />
      
    </section>

  );
};

export default History;
