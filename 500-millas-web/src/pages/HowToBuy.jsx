import React from "react";

const HowToBuy = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0efe8] via-[#fdf6e3] to-[#e6c78e] mt-28 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Título */}
        <div className="text-center">
          <h2 className="font-bebas uppercase text-4xl md:text-5xl font-bold text-[#2C1810] mb-4 drop-shadow-sm">
            Cómo comprar
          </h2>
          <p className="font-cormorant-garamond font-bold italic text-xl md:text-2xl text-gray-700">
            Elegí tus productos favoritos y realizá tu pedido de forma rápida y sencilla.
          </p>
        </div>

        {/* Contenedor de pasos */}
        <div className="flex flex-col gap-8">
          {[
            {
              icon: "🛒",
              title: "Elegí tus productos",
              color: "border-yellow-400 hover:border-yellow-500",
              description:
                "Revisá nuestra lista de productos y seleccioná la cantidad que querés comprar. Recordá que hay un máximo de 10 unidades por producto. Para pedidos mayores, contactanos por WhatsApp o email.",
            },
            {
              icon: "✉️",
              title: "Completá tus datos",
              color: "border-pink-400 hover:border-pink-500",
              description:
                "Ingresá tu nombre y email en el formulario de pedido. Así podremos contactarte y confirmar tu compra de manera rápida.",
            },
            {
              icon: "📲",
              title: "Envío por WhatsApp",
              color: "border-green-400 hover:border-green-500",
              description:
                "Al enviar el formulario, tu pedido llegará directamente a nuestro WhatsApp. Incluiremos el detalle de cada producto (cantidad x precio) y el total final para que todo quede claro.",
            },
            {
              icon: "💳🚚",
              title: "Coordinamos pago y envío",
              color: "border-blue-400 hover:border-blue-500",
              description:
                "Nos pondremos en contacto con vos para definir el método de pago y el envío. Así tu pedido llegará seguro y sin inconvenientes.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`bg-white/90 hover:bg-white transition-all duration-300 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border-l-8 ${step.color} hover:scale-[1.02]`}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-bebas text-2xl font-bold text-[#2C1810] mb-2 uppercase tracking-wider">
                {idx + 1}. {step.title}
              </h3>
              <p className="font-cormorant-garamond font-bold text-gray-700 text-xl leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-800 text-lg mt-6">
          ¡Así de simple! Tu pedido llegará rápido y seguro.
        </p>
      </div>
    </section>
  );
};

export default HowToBuy;
