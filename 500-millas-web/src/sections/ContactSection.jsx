import sectionImg from "../assets/images/section-image.jpg"; // reemplazá con tu imagen
import { FaCheckCircle } from "react-icons/fa"; // ícono para los items

const ContactSection = () => {
  const items = [
    "Item uno destacado",
    "Item dos destacado",
    "Item tres destacado",
    "Item cuatro destacado",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen izquierda */}
        <div className="md:w-2/3 w-full">
          <img
            src={sectionImg}
            alt="Sección destacada"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Contenido derecha */}
        <div className="md:w-1/3 w-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Título de la sección
          </h2>
          <p className="text-gray-600 mb-6">
            Este es un texto descriptivo para la sección. Explicá la característica,
            servicio o producto que querés destacar de manera clara y concisa.
          </p>

          <a
            href="#"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow mb-6"
          >
            Llamado a la acción
          </a>

          {/* Lista de items */}
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
