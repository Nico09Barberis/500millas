import React from 'react';
import bgImage from "../../assets/images/bg-products.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={bgImage}
        alt="Fondo hero"
        className="w-full h-full object-cover blur-sm"
      />

      {/* Overlay negro */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido centrado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-ancois-one tracking-widest uppercase text-white px-4">
        <p className="text-xl md:text-3xl max-w-2xl">
          conoce
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          nuestros productos 
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
