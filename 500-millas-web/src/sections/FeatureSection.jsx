import featureImg from "../assets/images/imgFormSection.png"; // reemplazá con tu imagen

const FeatureSection = () => {
  return (
    <section className="w-full bg-[#E6C78E] py-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 md:px-0">
        {/* Texto */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-ancois-one font-bold text-[#3B2F2F] mb-4">
            Título de la sección
          </h2>
          <p className="font-cormorant-garamond font-semibold text-lg md:text-xl text-[#3B2F2F] mb-6">
            Este es un texto descriptivo para la sección. Explicá la característica,
            servicio o producto que querés destacar. Mantenerlo claro y conciso.
          </p>
          <a
            href="#"
            className="px-6 py-3 border-2 border-[#5C4033] bg-transparent hover:bg-[#5C4033] font-bebas text-lg uppercase tracking-widest text-[#5C4033] hover:text-[#E6C78E] font-semibold transition-colors duration-200"
          >
            Llamado a la acción
          </a>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={featureImg}
            alt="Feature"
            className="w-full h-auto object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
