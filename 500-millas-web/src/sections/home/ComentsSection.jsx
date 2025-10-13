import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import img from "../../assets/images/bgComents.jpeg";

// Recibe un array de comentarios por props
const CommentsSection = ({
  comments = [
    "Los probé por primera vez en un viaje a Santa Fe y me enamoré, una delicia. - Luz R",
    "Nada como estos alfajores para la merienda, el dulce de leche es espectacular. - Ana S",
    "Los compré para regalar y terminaron quedándose en casa, ¡son adictivos!. - Marta C",
    "Me recuerdan a mi infancia, el sabor es igual al que hacía mi abuela. - Diego L",
  ],
}) => {
  return (
    <section className="bg-[#121212] min-h-screen flex flex-col items-center justify-start py-12">
      {/* Imagen con overlay y blur */}
      <div className="relative w-full max-w-4xl mb-12">
        {/* Imagen de fondo con blur */}
        <img
          src={img}
          alt="" // imagen decorativa, no la leen los lectores de pantalla
          className="w-full h-64 md:h-96 object-cover blur-sm"
        />

        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Contenido centrado */}
        <div className="absolute inset-0 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Contenedor del contenido */}
          <div className="bg-[#121212]/70 px-6 py-6 rounded">
            {/* Línea - texto - línea */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="h-px w-12 bg-white opacity-50"></span>
              <span className="font-cormorant-garamond italic text-white text-xl tracking-wider">
                since 1890
              </span>
              <span className="h-px w-12 bg-white opacity-50"></span>
            </div>

            {/* Título principal */}
            <h2 className="font-bebas text-white text-3xl md:text-4xl font-bold mb-2">
              Alfajores santafesinos
            </h2>

            {/* Subtítulo */}
            <p className="font-cormorant-garamond italic text-white text-lg md:text-xl mb-3">
              Tradición santafesina en cada bocado: capas, <br /> dulce de leche
              y glaseado.
            </p>

            {/* Texto pequeño */}
            <p className="font-cormorant-garamond font-semibold text-gray-300 text-xs md:text-sm max-w-md mx-auto mb-4">
              12 unid | 560 g | sabor único
            </p>
          </div>
        </div>
      </div>

      {/* Sección de 4 columnas con iconos */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8 font-cormorant-garamond text-center px-4">
        {comments.map((text, i) => (
          <div key={i} className="flex flex-col items-center">
            <RiDoubleQuotesR
              className="text-white text-5xl mb-3"
              aria-hidden="true"
            />
            <p className="font-semibold text-gray-300 text-lg">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
