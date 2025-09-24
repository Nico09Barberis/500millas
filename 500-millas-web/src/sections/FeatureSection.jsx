import featureImg from "../assets/images/imgFormSection.png"; // reemplazá con tu imagen

const FeatureSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 bg-[#E6C78E]">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="md:w-1/2 w-full">
          <img
            src={featureImg}
            alt="Feature"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-7xl font-bebas font-bold text-gray-800 mb-4">
            Título de la sección
          </h2>
          <p className="font-oswald text-xl text-gray-600 mb-6">
            Este es un texto descriptivo para la sección. Explicá la característica,
            servicio o producto que querés destacar. Mantenerlo claro y conciso.
          </p>
          <a
            href="#"
            className="px-8 py-3 border-2 border-[#5C4033] bg-transparent hover:bg-[#5C4033] uppercase tracking-widest text-[#5C4033] hover:text-[#B39573] font-semibold transition-colors duration-100"
          >
            Llamado a la acción
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
