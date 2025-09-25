import ImageCarousel from "../components/common/ImageCarousel";

import imgHome1 from "../assets/images/img-home-1.jpg";
import imgHome2 from "../assets/images/img-home-2.jpg";
import imgHome3 from "../assets/images/img-home.png";

import FormSection from "../sections/home/FormSection";
import FeatureSection from "../sections/home/FeatureSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ContactSection from "../sections/home/ContactSection";
import ParallaxSection from "../sections/home/ParallaxSection";
import ProductsSection from "../sections/home/ProductsSection";
import BuySections from "../sections/home/BuySections";
import MapSection from "../sections/home/MapSection";
import DataSection from "../sections/home/DataSection";
import AboutSection from "../sections/home/AboutSection";


function Home() {
  const images = [ imgHome1, imgHome2 ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-28 md:mt-36">
        {" "}
        {/* margin-top para no tapar la navbar fija */}
        <ImageCarousel images={images} />

        <FeatureSection />

        <AboutSection />

        <FormSection />
        
        <DataSection />

        <BuySections />

        <ParallaxSection />

        <ProductsSection />

        <ContactSection />

        <img
          src={imgHome3}          
          alt="Banner principal"
          className="w-full max-w-5xl mx-auto my-12 h-auto object-cover"
        />

        <MapSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Home;
