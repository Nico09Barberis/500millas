import { FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";

const DataSection = () => {
  return (
    <section className="py-6 px-6 my-12 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Columna 1 */}
        <div className="flex items-center gap-3 p-6">
          <TbTruckDelivery className="text-gray-800 text-3xl shrink-0" />
          <p className="text-md uppercase leading-tight text-gray-800">
            <strong>Realizamos envios a </strong>
            <br />
            todas las provincias
          </p>
        </div>

        {/* Columna 2 */}
        <div className="flex items-center gap-3 p-6">
          <CiMoneyCheck1 className="text-gray-800 text-3xl shrink-0" />
          <p className="text-md uppercase leading-tight text-gray-800">
            <strong>paga con </strong>transferencia,
            <br />
            Mercado Pago o efectivo
          </p>
        </div>

        {/* Columna 3 */}
        <div className="flex items-center gap-3 p-6">
          <FaWhatsapp className="text-gray-800 text-3xl shrink-0" />
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <p className="text-md uppercase leading-tight text-gray-800">
              <strong>Te ayudamos</strong>
              <br />
              con tus compras
            </p>
            <span className="text-xs font-bold tracking-wide uppercase rounded-full px-3 py-1 text-white bg-green-400">
              Escribinos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DataSection;
