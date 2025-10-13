import imgAlfajor from "../../assets/images/catAlfajor.png";
import imgGalleta from "../../assets/images/catGalleta.png";

// Componente reutilizable para cada producto
const ProductCard = ({ img, alt, label }) => (
  <div className="relative h-64 sm:h-80 md:h-96 bg-[#ffe6a2] overflow-hidden rounded-lg shadow-2xl group">
    <img
      loading="lazy"
      src={img}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <a
        href="/productos"
        aria-label={`Ir a ${label}`}
        className="px-6 py-2 border-2 border-[#4F4540] bg-transparent font-bebas text-lg sm:text-xl uppercase tracking-widest text-[#5C4033] hover:bg-[#4F4540] hover:text-[#E6C78E] font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
      >
        {label}
      </a>
    </div>
  </div>
);

const BuySection = () => {
  return (
    <section className="bg-white py-12 my-6">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl text-[#4F4540] font-ancois-one uppercase text-center mb-12">
          Conoce nuestros productos
        </h2>

        {/* Contenedor de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProductCard
            img={imgAlfajor}
            alt="Alfajores artesanales"
            label="Alfajores"
          />
          <ProductCard
            img={imgGalleta}
            alt="Galletas marinas"
            label="Galletas"
          />
        </div>
      </div>
    </section>
  );
};

export default BuySection;
