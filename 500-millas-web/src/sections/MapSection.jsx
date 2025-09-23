const MapSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Contenido izquierda */}
        <div className="md:w-1/3 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
            Nuestra ubicación
          </h2>
          <p className="text-gray-300 mb-2">Los Robles 85, Bella Italia, Santa Fe</p>
          <p className="text-gray-300 mb-4">📞 03492 582838</p>
          <p className="text-gray-200 mb-6">
            Vení a visitarnos o contactanos para más información.  
          </p>
          <a
            href="https://www.google.com/maps/place/Los+Robles+85,+Santa+Fe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Abrir en Google Maps
          </a>
        </div>

        {/* Mapa derecha */}
        <div className="md:w-2/3 h-96 rounded-xl overflow-hidden">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.3054896736835!2d-61.434978489613485!3d-31.267644074223675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95caaf39d3b60751%3A0xfbfe19459778686b!2sLos%20Robles%2085%2C%20S2300%20Bella%20Italia%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1758663983614!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
