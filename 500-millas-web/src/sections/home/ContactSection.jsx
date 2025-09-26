import sectionImg from "../../assets/images/imgFormSection.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";

const ContactSection = () => {
  // Cada item ahora tiene un icono y un texto
  const items = [
    { icon: FaSquarePhone, text: "Llamanos al 123-456-789" },
    { icon: MdEmail, text: "Escribinos a info@ejemplo.com" },
    { icon: FaHouse, text: "Visitanos en nuestra sucursal" },
    { icon: FaCheckCircle, text: "Item adicional de ejemplo" },
  ];

  return (
    <section id="contact" className="w-full mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-0.5">
        {/* Imagen izquierda */}
        <div className="md:w-2/3 w-full">
          <img
            src={sectionImg}
            alt="Sección destacada"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Contenido derecha */}
        <div className="md:w-1/3 w-full bg-[#E6C78E] flex flex-col p-4 justify-center">
          <h2 className="font-ancois-one text-4xl md:text-5xl font-bold text-[#3B2F2F] mb-4">
            ¿Querés vender nuestros productos?
          </h2>
          <p className="font-ancois-one text-xl md:text-2xl text-[#4F4540] mb-6">
            Si sos distribuidor o tenés un comercio, hacé click en “contactanos”
            y comunicate con nosotros.
          </p>

          <a
            href="#"
            className="inline-block text-center px-6 py-12 bg-white hover:bg-gray-200 font-ancois-one text-black uppercase text-2xl mb-6 hover:scale-105 transition"
          >
            Contactanos
          </a>

          {/* Lista de items */}
          <ul className="space-y-5 mt-6">
            {items.map((item, index) => {
              const Icon = item.icon; // guardamos el componente del icono
              return (
                <li key={index} className="font-ancois-one flex items-center gap-2 font-extralight text-xl text-[#4F4540]">
                  <Icon className="text-[#4F4540]" />
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
