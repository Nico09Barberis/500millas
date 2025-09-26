import React from "react";
import imgProduct from "../../assets/images/imgFormSection.png";

const productos = [
  {
    id: 1,
    nombre: "Producto Uno",
    descripcion: "Una breve descripción que resalta las características clave del producto y su utilidad.",
    imagen: imgProduct
  },
  {
    id: 2,
    nombre: "Producto Dos",
    descripcion: "Descripción concisa y atractiva, enfocada en lo que lo hace especial.",
    imagen: imgProduct
  },
  {
    id: 3,
    nombre: "Producto Tres",
    descripcion: "Explica en pocas palabras los beneficios o características únicas de este producto.",
    imagen: imgProduct
  },
  {
    id: 4,
    nombre: "Producto Cuatro",
    descripcion: "Texto breve y sutil, ideal para enganchar al usuario sin saturar la vista.",
    imagen: imgProduct
  },
];

const ProductSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Nuestros Productos Destacados
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm">{producto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;