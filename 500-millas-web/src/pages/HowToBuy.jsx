import React from "react";

const HowToBuy = () => {
  return (
    <section className="bg-white mt-28 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Título */}
        <div className="text-center">
          <h2 className="font-ancois-one uppercase text-4xl md:text-5xl font-semibold text-[#4F4540] mb-4 drop-shadow-sm">
            Cómo comprar
          </h2>
          <p className="font-cormorant-garamond font-bold italic text-xl md:text-2xl text-[#4F4540]">
            Elegí tus productos favoritos y realizá tu pedido de forma rápida y sencilla.
          </p>
        </div>

        {/* Contenedor de pasos */}
        <div className="flex flex-col gap-8">
          {[
            {
              icon: "🛒",
              title: "Elegí tus productos",
              color: "border-[#DAA520] hover:border-[#DAA520]",
              description:
                "Revisá nuestra lista de productos y seleccioná la cantidad que querés comprar. Recordá que hay un máximo de 10 unidades por producto. Para pedidos mayores, contactanos por WhatsApp o email.",
            },
            {
              icon: "✉️",
              title: "Completá tus datos",
              color: "border-[#DAA520] hover:border-[#DAA520]",
              description:
                "Ingresá tu nombre y email en el formulario de pedido. Así podremos contactarte y confirmar tu compra de manera rápida.",
            },
            {
              icon: "📲",
              title: "Envío por WhatsApp",
              color: "border-[#DAA520] hover:border-[#DAA520]",
              description:
                "Al enviar el formulario, tu pedido llegará directamente a nuestro WhatsApp. Incluiremos el detalle de cada producto (cantidad x precio) y el total final para que todo quede claro.",
            },
            {
              icon: "💳🚚",
              title: "Coordinamos pago y envío",
              color: "border-[#DAA520] hover:border-[#DAA520]0",
              description:
                "Nos pondremos en contacto con vos para definir el método de pago y el envío. Así tu pedido llegará seguro y sin inconvenientes.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className={`bg-[#F9E79F] hover:bg-[#FBF1A9] transition-all duration-300 rounded-xl shadow-xl p-8 flex flex-col items-center text-center border-l-8 ${step.color} hover:scale-[1.02]`}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-ancois-one text-2xl font-bold text-[#4F4540] mb-2 uppercase tracking-wider">
                {idx + 1}. {step.title}
              </h3>
              <p className="font-caudex font-bold text-gray-700 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center font-caudex italic font-semibold text-gray-800 text-lg mt-6">
          ¡Así de simple! Tu pedido llegará rápido y seguro.
        </p>
      </div>
    </section>
  );
};

export default HowToBuy;
