import WhatsAppButton from "../components/common/WhatsAppButton";
import ProductSection from "../sections/product/ProductSection";
import ImgTitle from "../assets/images/imgTitle.png";

function Product() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-28 md:mt-36">
        {" "}
        {/* margin-top para no tapar la navbar fija */}

         <img
            src={ImgTitle}          
            alt="Banner principal"
            className="w-full mx-auto h-auto object-cover"
          />

        <ProductSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Product;
