import featureImg from "../assets/images/imgFormSection.png"; // reemplazá con tu imagen

const FeatureSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 bg-gray-300">
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
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
            Título de la sección
          </h2>
          <p className="text-gray-600 mb-6">
            Este es un texto descriptivo para la sección. Explicá la característica,
            servicio o producto que querés destacar. Mantenerlo claro y conciso.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow"
          >
            Llamado a la acción
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
