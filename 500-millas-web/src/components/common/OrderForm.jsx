import { useState, useEffect } from "react";

const OrderForm = ({ products, whatsappNumber }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (products) {
      const initialQuantities = products.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    }
  }, [products]);

  useEffect(() => {
    // Calcula total cada vez que cambian las cantidades
    const newTotal = products.reduce((sum, product) => {
      const qty = quantities[product.id] || 0;
      return sum + qty * (product.price || 0);
    }, 0);
    setTotal(newTotal);
  }, [quantities, products]);

  const handleQuantityChange = (id, value) => {
    setQuantities({ ...quantities, [id]: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedProducts = products
      .filter((p) => quantities[p.id] > 0)
      .map((p) => `- ${p.name} (${quantities[p.id]} x $${p.price}): $${quantities[p.id] * p.price}`)
      .join("%0A");

    if (!selectedProducts) {
      alert("Seleccioná al menos un producto");
      return;
    }

    const message = `Nuevo pedido de ${name} (${email})%0A${selectedProducts}%0ATotal: $${total}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <form
      className="flex flex-col gap-4 overflow-auto p-6 max-h-[70vh] bg-slate-900 rounded-2xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-3xl font-bold text-gray-300 mb-4">
        Hacer pedido
      </h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-slate-900 w-full rounded-xl border border-gray-700 px-4 py-2 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
        required
      />

      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-slate-900 w-full rounded-xl border border-gray-700 px-4 py-2 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
        required
      />

      <div className="flex-1 overflow-auto">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col mb-3">
            <label className="text-gray-300 font-medium mb-1">
              {product.name} (${product.price})
            </label>
            <input
              type="number"
              min="0"
              value={quantities[product.id] || 0}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              className="bg-slate-800 w-11/12 rounded-xl border border-gray-700 px-3 py-2 text-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-slate-900 transition"
            />
          </div>
        ))}
      </div>

      {/* Total dinámico */}
      <div className="text-right text-gray-200 font-bold text-lg">
        Total: ${total}
      </div>

      <button
        type="submit"
        className="mt-4 rounded-xl px-4 py-2 text-sm font-semibold bg-gray-700 hover:bg-gray-800 text-white shadow-md transition"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
};

export default OrderForm;
