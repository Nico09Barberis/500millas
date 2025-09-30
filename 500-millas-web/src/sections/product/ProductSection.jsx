import React from "react";
import imgProduct from "../../assets/images/imgFormSection.png";
import imgProductHover from "../../assets/images/logo.png";

const products = [
  {
    id: 1,
    name: "caja premium",
    description:
    "Contiene 12 alfajores santafesinos artesanales: tres galletas y dos suaves capas de dulce de leche, bañadas en glase. Perfecto para regalar, acompañar un evento especial o simplemente darse un gusto.",
    presentation: ["12 unid", "560 g", "30 x 40 cm"],
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 2,
    name: "ALFACHOCO NEGRO",
    description:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentation: ["individual", "6 unds", "12 unds"],
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 3,
    name: "ALFACHOCO NEGRO",
    description:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentation: ["individual", "6 unds", "12 unds"],
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 4,
    name: "ALFACHOCO NEGRO",
    description:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentation: ["individual", "6 unds", "12 unds"],
    img: imgProduct,
    imgHover: imgProductHover,
  },
];

const ProductSection = () => {
  return (
    <section className="bg-gradient-to-b py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="max-w-3xl mx-auto flex flex-col text-center">
          <h2 className="text-5xl font-tangerine-regular  font-bold mb-6">
            Sabias que ...
          </h2>
          <p className="font-cormorant-garamond text-2xl font-semibold text-gray-900">
            Elaboramos productos 100 % artesanales, basados en recetas propias
            que se han perfeccionado con los años. Seleccionamos las mejores
            materias primas para ofrecer opciones saludables para tu día a día y
            otras creaciones ideales para disfrutar, regalar o regalarte.
          </p>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
          >
            {/* Columna izquierda - Texto */}
            <div className="md:w-1/2 bg-[#F0D98F] p-8 flex flex-col justify-center text-black relative">
              {/* name horizontal con subrayado sutil */}
              <h3 className="font-bebas text-4xl md:text-5xl font-extrabold tracking-wide mb-6 relative">
                {product.name}
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-black rounded-full opacity-50"></span>
              </h3>

              {/* Descripción y presentación */}
              <div className="space-y-3">
                <p className="font-cormorant-garamond text-xl text-black font-semibold">
                  {product.description}
                </p>
                <p className="font-bebas text-2xl font-semibold uppercase text-black tracking-wider">
                  Presentación:
                </p>
                <p className="font-cormorant-garamond text-xl italic font-semibold text-black">
                  {product.presentation.join(" // ")}
                </p>
              </div>
            </div>

            {/* Columna derecha - Img */}
            <div className="md:w-1/2 bg-white flex items-center justify-center relative overflow-hidden">
              {/* Img normal */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute top-0 left-0"
              />

              {/* Img hover */}
              <img
                src={product.imgHover}
                alt={product.name}
                className="w-full h-auto object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}
        <div className="mt-12 text-center">
          <h3 className="font-dancing text-2xl font-bold text-gray-700">
            ¡Seguimos creando!
          </h3>
          <p className="font-cormorant-garamond italic text-xl font-semibold text-gray-600 mt-2">
            Muy pronto encontrarás nuevos productos artesanales en nuestra
            tienda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
