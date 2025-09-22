import { useState, useEffect } from "react";

// Recibe un array de imágenes importadas
function ImageCarousel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar slide automáticamente
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    // Limpiar el intervalo al desmontar
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
