import featureImg from "../../assets/images/alfajor.jpg"; // reemplazá con tu imagen

const FeatureSection = () => {
  return (
    <section className="w-full bg-[#F9E79F] py-12 px-2">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 md:px-6">
        {/* Texto */}
        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-ancois-one uppercase font-bold text-[#3B2F2F] mb-4">
            Alfajor Santafesino
          </h2>
          <p className="font-caudex font-bold text-lg md:text-xl text-justify text-[#3B2F2F] mb-6">
            Elaborado de manera artesanal, combina tres capas finas
            de galletas suaves y ligeramente crujientes, intercaladas con dos
            abundantes capas de dulce de leche de textura cremosa y sabor
            intenso. <br />Todo el conjunto se corona con un glaseado blanco y
            brillante, delicadamente aplicado a mano, que le otorga su
            inconfundible aspecto y un toque de dulzura extra.
          </p>
          <a
            href="/productos"
            className="px-6 py-3 border-2 border-[#4F4540] bg-transparent hover:bg-[#4F4540] font-bebas text-lg uppercase tracking-widest text-[#5C4033] hover:text-[#E6C78E] font-semibold transition-colors duration-200"
          >
            Comprar
          </a>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 w-full md:p-0 flex justify-center">
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
