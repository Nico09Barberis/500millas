import ImageCarousel from "../components/common/ImageCarousel";

import imgHome1 from "../assets/images/img-home-1.jpg";
import imgHome2 from "../assets/images/img-home-2.jpg";
import FormSection from "../sections/FormSection";
import FeatureSection from "../sections/FeatureSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ContactSection from "../sections/ContactSection";
import ParallaxSection from "../sections/ParallaxSection";
import ProductsSection from "../sections/ProductsSection";
import BuySections from "../sections/BuySections";
import MapSection from "../sections/MapSection";
import DataSection from "../sections/DataSection";


function Home() {
  const images = [ imgHome1, imgHome2 ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        ¡Bienvenido a Mi Empresa!
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-md">
        Esta es la página de prueba de nuestra web. Más adelante aquí
        mostraremos nuestros productos, historia y cómo contactarnos.
      </p>
      <div className="mt-24">
        {" "}
        {/* margin-top para no tapar la navbar fija */}
        <ImageCarousel images={images} />

        <FeatureSection />

        <FormSection />

        <ParallaxSection />

        <ProductsSection />

        <BuySections />

        <ContactSection />

        <DataSection />

        <MapSection />

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Home;
