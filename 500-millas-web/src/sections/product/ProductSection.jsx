import React from "react";
import { useState } from "react";
import imgProduct from "../../assets/images/alfajor.jpg";
import imgProductHover from "../../assets/images/logo.png";
import OrderForm from "../../components/common/OrderForm";
import { IoShareSocial } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Caja premium",
    description:
      "Contiene 12 alfajores santafesinos artesanales: tres galletas y dos suaves capas de dulce de leche, bañadas en glase. Perfecto para regalar, acompañar un evento especial o simplemente darse un gusto.",
    presentation: ["caja sellada", "480 g", "12 unidades", "30 x 40 cm"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 2,
    name: "Paquete de alfajores santafesinos",
    description:
      "Alfajores santafesinos artesanales: tres galletas y dos suaves capas de dulce de leche, bañadas en glase.\n Ideales para compartir, regalar o disfrutar en cualquier momento.",
    presentation: ["paquete sellado", "480 g", "12 unidades"],
    price: 12000,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 3,
    name: "Galletas marinas comunes",
    description:
      "Las galletas marinas comunes, un clásico infaltable, ofrecen una textura crujiente y un sabor neutro que las hace perfectas para acompañar cualquier comida o disfrutar solas.",
    presentation: ["paquete sellado", "300 g"],
    price: 1200,
    img: imgProduct,
    imgHover: imgProductHover,
  },
  {
    id: 4,
    name: "Galletas marinas con semillas",
    description:
      "Crujientes y nutritivas, nuestras galletas combinan semillas de lino, sésamo y chía para un snack lleno de sabor y energía. Perfectas para disfrutar en cualquier momento del día.",
    presentation: ["paquete sellado", "300 g"],
    price: 1200,
    img: imgProduct,
    imgHover: imgProductHover,
  },
];

const ProductSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gradient-to-b py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="max-w-3xl mx-auto flex flex-col text-center">
          <h2 className="text-5xl font-tangerine-regular font-bold mb-6">
            Sabías que ...
          </h2>
          <p className="font-caudex italic text-xl font-semibold text-gray-900">
            Elaboramos productos 100 % artesanales, basados en recetas propias
            que se han perfeccionado con los años. Seleccionamos las mejores
            materias primas para ofrecer opciones saludables para tu día a día y
            otras creaciones ideales para disfrutar, regalar o regalarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 py-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#F9E79F] rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
            >
              {/* Imagen */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-100 group-hover:opacity-0 absolute top-0 left-0"
                />
                <img
                  src={product.imgHover}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                <span className="absolute top-3 left-3 bg-[#F0D98F] text-[#2E2723] text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wide shadow">
                  {product.presentation[0]}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between h-auto font-caudex">
                <div>
                  <h3 className="text-xl font-semibold text-[#2E2723] mb-2">
                    {product.name}
                  </h3>

                  <p className="text-[#2E2723] text-md mb-3 line-clamp-4 whitespace-pre-line font-semibold">
                    {product.description}
                  </p>

                  <div className="text-md text-[#2E2723] mb-2">
                    <p className="font-semibold mb-1">Presentación:</p>
                    <p className="italic font-semibold">
                      {product.presentation.join(" // ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <p className="font-oswald font-bold italic text-xl text-[#2E2723] uppercase">
                    {product.price.toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </p>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.name,
                          text: product.description,
                          url: window.location.href,
                        });
                      } else {
                        alert(
                          "La función de compartir no está disponible en este navegador."
                        );
                      }
                    }}
                    className="p-3 rounded-full hover:bg-[#e6cb7a] transition"
                    title="Compartir producto"
                  >
                    <IoShareSocial className="w-6 h-6 text-[#3F3732]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-dancing text-3xl md:text-4xl font-bold mb-2 text-[#4F4540]">
            ¡Seguimos creando!
          </p>
          <p className="font-cormorant-garamond text-lg md:text-xl italic font-bold text-[#7A6E68]">
            Proximamente nuevos productos...
          </p>
        </div>

        {/* Botón para abrir el modal */}
        <div className="mt-6 text-center">
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
