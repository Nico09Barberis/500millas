import React from "react";
import { useState } from "react";
import imgProduct from "../../assets/images/imgFormSection.png";
import imgProductHover from "../../assets/images/logo.png";
import OrderForm from "../../components/common/OrderForm";

const products = [
  {
    id: 1,
    name: "Caja premium",
    description:
      "Contiene 12 alfajores santafesinos artesanales: tres galletas y dos suaves capas de dulce de leche, bañadas en glase. Perfecto para regalar, acompañar un evento especial o simplemente darse un gusto.",
    presentation: ["12 unid", "560 g", "30 x 40 cm"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 2,
    name: "Paquete de alfajores santafesinos",
    description: "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentation: ["individual", "6 unds", "12 unds"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 3,
    name: "Galletas marinas comunes",
    description: "Las galletas marinas comunes, un clásico infaltable, ofrecen una textura crujiente y un sabor neutro que las hace perfectas para acompañar cualquier comida o disfrutar solas.",
    presentation: ["individual", "6 unds", "12 unds"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 4,
    name: "Galletas marinas con semillas",
    description: "Crujientes y nutritivas, nuestras galletas combinan semillas de lino, sésamo y chía para un snack lleno de sabor y energía. Perfectas para disfrutar en cualquier momento del día.",
    presentation: ["individual", "6 unds", "12 unds"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
];

const ProductSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="max-w-3xl mx-auto flex flex-col text-justify md:text-center">
          <h2 className="text-5xl font-tangerine-regular font-bold mb-6">
            Sabías que ...
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
              <h3 className="font-bebas text-4xl md:text-5xl font-extrabold tracking-wide mb-6 relative">
                {product.name}
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-black rounded-full opacity-50"></span>
              </h3>

              <div className="space-y-3">
                <p className="font-cormorant-garamond text-xl text-black font-semibold">
                  {product.description}
                </p>
                <p className="font-oswald text-xl uppercase text-black">
                  Presentación:
                </p>
                <p className="font-cormorant-garamond text-xl italic font-semibold text-black">
                  {product.presentation.join(" // ")}
                </p>
                <p className="font-oswald text-xl uppercase text-black">
                  Precio: $ {product.price}
                </p>
              </div>
            </div>

            {/* Columna derecha - Img */}
            <div className="md:w-1/2 bg-white flex items-center justify-center relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0 absolute top-0 left-0"
              />
              <img
                src={product.imgHover}
                alt={product.name}
                className="w-full h-auto object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        ))}

        {/* Botón para abrir el modal */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 border-2 border-[#4F4540] bg-transparent font-bebas text-lg sm:text-xl uppercase tracking-widest text-[#5C4033] hover:bg-[#4F4540] hover:text-[#F0D98F] font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Hacer pedido
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
          onClick={() => setIsOpen(false)} // clic fuera cierra modal
        >
          <div
            className="bg-slate-900 p-6 rounded-xl shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer clic dentro
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-200 hover:text-gray-400"
            >
              ✕
            </button>

            {/* Formulario */}
            <OrderForm products={products} whatsappNumber={"3492650378"} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
