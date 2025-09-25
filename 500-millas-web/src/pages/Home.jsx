import ImageCarousel from "../components/common/ImageCarousel";

import imgHome1 from "../assets/images/img-home-1.jpg";
import imgHome2 from "../assets/images/img-home-2.jpg";

import FormSection from "../sections/home/FormSection";
import FeatureSection from "../sections/home/FeatureSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ContactSection from "../sections/home/ContactSection";
import ParallaxSection from "../sections/home/ParallaxSection";
import ProductsSection from "../sections/home/ProductsSection";
import BuySections from "../sections/home/BuySections";
import MapSection from "../sections/home/MapSection";
import DataSection from "../sections/home/DataSection";


function Home() {
  const images = [ imgHome1, imgHome2 ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-36">
        {" "}
        {/* margin-top para no tapar la navbar fija */}
        <ImageCarousel images={images} />

        <FeatureSection />

        <FormSection />

        <BuySections />

        <ParallaxSection />

        <ProductsSection />

        <DataSection />
      
        <ContactSection />

        <MapSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Home;
