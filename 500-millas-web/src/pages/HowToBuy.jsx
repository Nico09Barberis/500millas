import React from "react";

const HowToBuy = () => {
  return (
    <section className="bg-gradient-to-b from-[#FDF6E3] to-[#FFF8E1] mt-28 md:mt-28 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-bebas font-bold text-black mb-4">
            Cómo comprar
          </h2>
          <p className="text-xl font-cormorant-garamond text-gray-800">
            Elegí tus productos favoritos y realizá tu pedido de forma rápida y sencilla.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Paso 1 */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold mb-2">1. Elegí tus productos</h3>
            <p className="text-gray-700 text-sm">
              Revisá nuestra lista de productos y seleccioná los que querés comprar.  
              Podés indicar la cantidad de cada uno.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold mb-2">2. Completá tus datos</h3>
            <p className="text-gray-700 text-sm">
              Ingresá tu nombre y email en el formulario de pedido para que podamos contactarte y confirmar tu compra.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-4">📲</div>
            <h3 className="text-xl font-semibold mb-2">3. Envío por WhatsApp</h3>
            <p className="text-gray-700 text-sm">
              Una vez enviado el formulario, tu pedido llegará directamente a nuestro WhatsApp.  
              Te confirmaremos el total y detalles de la entrega.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-800 italic mt-6">
          ¡Así de simple! Tu pedido llegará rápido y seguro.
        </p>
      </div>
    </section>
  );
};

export default HowToBuy;
