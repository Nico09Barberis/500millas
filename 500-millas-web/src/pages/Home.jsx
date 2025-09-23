import ImageCarousel from "../components/common/ImageCarousel";

import imgHome1 from "../assets/images/img-home-1.jpg";
import imgHome2 from "../assets/images/img-home-2.jpg";
import FormSection from "../sections/FormSection";
import FeatureSection from "../sections/FeatureSection";
import WhatsAppButton from "../components/common/WhatsAppButton";


function Home() {
  const images = [ imgHome1, imgHome2 ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
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

        <WhatsAppButton />
      </div>
    </div>
  );
}

export default Home;
