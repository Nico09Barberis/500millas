import sectionImg from "../../assets/images/cajaPremium.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaSquarePhone, FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  // Cada item ahora tiene un icono y un texto
  const items = [
    { icon: FaSquarePhone, text: "Llamanos al 3492502030" },
    { icon: MdEmail, text: "Escribinos a info@ejemplo.com" },
    { icon: FaHouse, text: "Visitanos en nuestro local" },
    { icon: FaInstagram, text: "Seguinos en instagram @500millas__" },
  ];

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdfrTwVrychl5dgV9xvE3mY_S5Bk0NNpUcgeF3R4ACttTFJhw/viewform?usp=header";

  return (
    <section className="w-full mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-0.5">
        {/* Imagen izquierda */}
        <div className="md:w-2/3 w-full">
          <img
            src={sectionImg}
            alt="Caja premium con productos"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contenido derecha */}
        <div className="md:w-1/3 w-full bg-[#E6C977] flex flex-col p-4 py-12 md:py-4 sm:p-6 text-center md:text-left md:justify-center">
          <h2 className="font-ancois-one text-4xl md:text-5xl font-bold text-[#3B2F2F] mb-4">
            ¿Querés vender nuestros productos?
          </h2>
          <p className="font-ancois-one text-xl md:text-2xl text-[#4F4540] mb-6">
            Si sos distribuidor o tenés un comercio, hacé click en “contactanos”
            y comunicate con nosotros.
          </p>

          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Llenar solicitud (se abre en nueva pestaña)"
            className="inline-block text-center px-6 py-12 bg-white hover:bg-gray-200 font-ancois-one text-black uppercase text-2xl mb-6 hover:scale-105 transition"
          >
            Contactanos
          </a>

          {/* Lista de items */}
          <ul className="space-y-5 mt-6">
            {items.map((item, index) => {
              const Icon = item.icon; // guardamos el componente del icono
              return (
                <li
                  key={index}
                  className="font-ancois-one flex items-center gap-2 font-extralight text-xl text-[#4F4540]"
                >
                  <Icon className="text-[#4F4540]" aria-hidden="true" />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
