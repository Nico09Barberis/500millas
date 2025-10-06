import { FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";

const DataSection = () => {
  return (
    <section className="py-6 px-6 my-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Columna 1 */}
        <article className="flex flex-col md:flex-row items-center gap-4 p-6">
          <TbTruckDelivery
            className="text-gray-800 text-4xl shrink-0"
            title="Envíos"
            aria-label="Envíos"
          />
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold uppercase text-gray-800">
              Realizamos envíos a
            </h3>
            <p className="text-base uppercase leading-tight text-gray-800">
              todas las provincias
            </p>
          </div>
        </article>

        {/* Columna 2 */}
        <article className="flex flex-col md:flex-row items-center gap-4 p-6">
          <CiMoneyCheck1
            className="text-gray-800 text-4xl shrink-0"
            title="Métodos de pago"
            aria-label="Métodos de pago"
          />
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold uppercase text-gray-800">
              Podes pagar con
            </h3>
            <p className="text-base uppercase leading-tight text-gray-800">
              transferencia, Mercado Pago o efectivo
            </p>
          </div>
        </article>

        {/* Columna 3 */}
        <article className="flex flex-col md:flex-row items-center gap-4 p-6">
          <FaWhatsapp
            className="text-gray-800 text-4xl shrink-0"
            title="Atención por WhatsApp"
            aria-label="Atención por WhatsApp"
          />
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-center md:text-left">
            <div>
              <h3 className="text-base font-bold uppercase text-gray-800">
                Te ayudamos
              </h3>
              <p className="text-base uppercase leading-tight text-gray-800">
                con tus compras
              </p>
            </div>
            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wide uppercase rounded-full px-3 py-1 text-white bg-green-500 hover:bg-green-600"
            >
              Escribinos
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default DataSection;
