import WhatsAppButton from "../components/common/WhatsAppButton";
import ProductSection from "../sections/product/ProductSection";

function Product() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-28 md:mt-36">
        {" "}
        {/* margin-top para no tapar la navbar fija */}
        <ProductSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Product;
