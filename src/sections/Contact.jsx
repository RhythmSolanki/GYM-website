export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">CONTACT US</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            GET IN <span className="text-primary">TOUCH</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="bg-secondary p-8 rounded-sm border border-gray-800 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl text-white mb-1">Address</h4>
                    <p className="font-inter text-gray-400">123 Fitness Street, Gym City, State - 123456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl text-white mb-1">Phone</h4>
                    <p className="font-inter text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl text-white mb-1">Email</h4>
                    <p className="font-inter text-gray-400">info@fitnesstheater.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-primary text-white px-6 py-4 font-bold text-lg rounded-sm hover:bg-red-700 transition-colors duration-300 glow-red-hover">
                📞 Call Now
              </button>
              <button className="flex-1 border-2 border-primary text-primary px-6 py-4 font-bold text-lg rounded-sm hover:bg-primary hover:text-white transition-colors duration-300">
                🧭 Get Directions
              </button>
            </div>
          </div>
          <div className="fade-in">
            <div className="aspect-video bg-secondary rounded-sm border border-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <span className="text-5xl">🗺️</span>
                <p className="mt-4 font-inter">Embed Google Maps Here</p>
                <p className="text-sm">Replace with your map iframe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
