import React from "react";
import imgProduct from "../../assets/images/imgFormSection.png";

const productos = [
  {
    id: 1,
    nombre: "ALFACHOCO NEGRO",
    descripcion:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentacion: ["individual", "6 unds", "12 unds"],
    imagen: imgProduct,
  },
  {
    id: 2,
    nombre: "ALFACHOCO NEGRO",
    descripcion:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentacion: ["individual", "6 unds", "12 unds"],
    imagen: imgProduct,
  },
  {
    id: 3,
    nombre: "ALFACHOCO NEGRO",
    descripcion:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentacion: ["individual", "6 unds", "12 unds"],
    imagen: imgProduct,
  },
  {
    id: 4,
    nombre: "ALFACHOCO NEGRO",
    descripcion:
      "El más rico dulce de leche artesanal entre dos deliciosas galletitas de masa casera, bañadas en chocolate.",
    presentacion: ["individual", "6 unds", "12 unds"],
    imagen: imgProduct,
  },
];

const ProductSection = () => {
  return (
    <section className="bg-gradient-to-b py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
          >
            {/* Columna izquierda - Texto */}
            <div className="md:w-1/2 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-8 flex flex-col justify-center text-white relative">
              {/* Nombre horizontal con subrayado sutil */}
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6 relative">
                {producto.nombre}
                <span className="absolute left-0 -bottom-2 w-20 h-1 bg-white rounded-full opacity-50"></span>
              </h3>

              {/* Descripción y presentación */}
              <div className="space-y-3">
                <p className="text-gray-100">{producto.descripcion}</p>
                <p className="font-semibold uppercase text-white/80 tracking-wider">
                  Presentación:
                </p>
                <p className="text-white/90">{producto.presentacion.join(" // ")}</p>
              </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="md:w-1/2 bg-white flex items-center justify-center">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
