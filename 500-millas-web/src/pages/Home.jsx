
import imgHome1 from "../assets/images/imgHome1.png";
import imgHome2 from "../assets/images/img-home.png";

import FormSection from "../sections/home/FormSection";
import FeatureSection from "../sections/home/FeatureSection";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ContactSection from "../sections/home/ContactSection";
import ParallaxSection from "../sections/home/ParallaxSection";
import BuySections from "../sections/home/BuySections";
import MapSection from "../sections/home/MapSection";
import DataSection from "../sections/home/DataSection";
import AboutSection from "../sections/home/AboutSection";
import CommentsSection from "../sections/home/ComentsSection";


function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mt-28 md:mt-36">
        {" "}
        {/* margin-top para no tapar la navbar fija */}

      <img
        src={imgHome1}          
        alt="Banner principal"
        className="w-full max-w-6xl mx-auto my-0 md:my-12 h-auto object-cover"
      />

        <AboutSection />
        
        <FeatureSection />

        <FormSection />
        
        <DataSection />

        <ParallaxSection />
        
        <BuySections />

        <ContactSection />

      <img
        src={imgHome2}          
        alt="Banner principal"
        className="hidden md:block w-full max-w-5xl mx-auto my-24 h-auto object-cover"
      />

        <CommentsSection />

        <MapSection />

      </div>
    </div>
  );
}

export default Home;
