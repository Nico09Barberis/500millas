import bgImage from "../../assets/images/descargar.jpeg";

const FormSection = () => {
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdfrTwVrychl5dgV9xvE3mY_S5Bk0NNpUcgeF3R4ACttTFJhw/viewform?usp=header";

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={bgImage}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro opcional para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-ancois-one text-4xl md:text-5xl font-bold mb-4">
          ¿Querés sumarte a la familia 500millas?
        </h1>
        <p className="font-rowdies-light text-lg md:text-xl mb-6">
          Si sos distribuidor o querés emprender, vendé el alfajor medalla de
          oro y plata en el Mundial de Alfajores. Excelente calidad con la mejor
          rentabilidad.{" "}
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-8">
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#9E9E9E] hover:bg-[#8DD13E] font-ancois-one uppercase text-white text-center hover:scale-110 transition-all duration-100"
            aria-label="Llenar solicitud (se abre en nueva pestaña)"
          >
            Llenar solicitud
          </a>
          <a
            href="https://wa.me/5493492582838?text=Hola!%20Quiero%20más%20información%20sobre%20los%20alfajores."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#E5E5E5] hover:bg-[#8DD13E] font-ancois-one uppercase font-semibold text-black hover:text-white text-center hover:scale-110 transition-all duration-100"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
