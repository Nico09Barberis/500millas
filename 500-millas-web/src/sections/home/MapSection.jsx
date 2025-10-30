import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";

const MapSection = () => {
  return (
    <section className="py-16 px-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Contenido izquierda */}
        <article className="md:w-1/3 font-caudex font-semibold flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F9E79F] mb-6">
            Nuestra ubicación
          </h2>

          {/* Dirección */}
          <p className="flex items-center gap-3 text-[#F9E79F] mb-3">
            <FaHouse
              className="text-[#F9E79F] text-xl shrink-0"
              aria-label="Dirección"
            />
            Los Robles 85, Bella Italia, Santa Fe
          </p>

          {/* Teléfono */}
          <p className="flex items-center gap-3 text-[#F9E79F] mb-3">
            <FaSquarePhone
              className="text-[#F9E79F] text-xl shrink-0"
              aria-label="Teléfono"
            />
            <a href="tel:03492582838" className="hover:underline">
              03492 582838
            </a>
          </p>

          {/* Email (si lo usas) */}
          <p className="flex items-center gap-3 text-[#F9E79F] mb-6">
            <MdEmail
              className="text-[#F9E79F] text-xl shrink-0"
              aria-label="Correo electrónico"
            />
            <a
              href="mailto:alfajores500millas@gmail.com"
              className="hover:underline"
            >
              alfajores500millas@gmail.com
            </a>
          </p>

          <p className="text-[#F9E79F] mb-6">
            Vení a visitarnos o contactanos para más información.
          </p>

          <a
            href="https://www.google.com/maps/place/Los+Robles+85,+Santa+Fe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación en Google Maps"
            className="px-6 py-3 bg-[#1A1712] hover:bg-[#0E0C09] border-2 border-[#F9E79F] text-white hover:scale-105 transition"
          >
            Abrir en Google Maps
          </a>
        </article>

        {/* Mapa derecha */}
        <div className="md:w-2/3 h-96 overflow-hidden">
          <iframe
            title="Mapa de ubicación Los Robles 85, Bella Italia, Santa Fe"
            aria-label="Mapa de Google con la ubicación Los Robles 85, Bella Italia, Santa Fe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.3054896736835!2d-61.434978489613485!3d-31.267644074223675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caaf39d3b60751%3A0xfbfe19459778686b!2sLos%20Robles%2085%2C%20S2300%20Bella%20Italia%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1758663983614!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
