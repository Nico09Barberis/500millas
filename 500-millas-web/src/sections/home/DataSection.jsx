import { FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";

const DataSection = () => {
  return (
    <section className="py-6 px-6 my-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Columna 1 */}
        <article className="flex items-center gap-4 p-6">
          <TbTruckDelivery
            className="text-gray-800 text-4xl shrink-0"
            aria-label="Envíos"
          />
          <p className="text-base uppercase leading-tight text-gray-800">
            <strong>Realizamos envíos a</strong>
            <br />
            todas las provincias
          </p>
        </article>

        {/* Columna 2 */}
        <article className="flex items-center gap-4 p-6">
          <CiMoneyCheck1
            className="text-gray-800 text-4xl shrink-0"
            aria-label="Métodos de pago"
          />
          <p className="text-base uppercase leading-tight text-gray-800">
            <strong>Paga con</strong> transferencia,
            <br />
            Mercado Pago o efectivo
          </p>
        </article>

        {/* Columna 3 */}
        <article className="flex items-center gap-4 p-6">
          <FaWhatsapp
            className="text-gray-800 text-4xl shrink-0"
            aria-label="Atención por WhatsApp"
          />
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-base uppercase leading-tight text-gray-800">
              <strong>Te ayudamos</strong>
              <br />
              con tus compras
            </p>
            <span className="text-xs font-bold tracking-wide uppercase rounded-full px-3 py-1 text-white bg-green-500">
              Escribinos
            </span>
          </div>
        </article>

      </div>
    </section>
  );
};

export default DataSection;
