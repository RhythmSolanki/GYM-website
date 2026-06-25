export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary"></div>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(225, 29, 46, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 29, 46, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="font-oswald text-primary text-xl md:text-2xl tracking-widest mb-4">
            TRANSFORM YOUR BODY. ELEVATE YOUR LIFESTYLE.
          </h2>
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white leading-tight mb-6">
            TRAIN HARD.<br />
            <span className="text-primary">TRANSFORM FASTER.</span>
          </h1>
          <p className="font-inter text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            State-of-the-art equipment, expert trainers, and a motivating environment designed to help you achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('pricing')}
              className="bg-primary text-white px-10 py-4 font-bold text-lg rounded-sm hover:bg-red-700 transition-all duration-300 glow-red pulse-glow"
            >
              JOIN NOW
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="border-2 border-white text-white px-10 py-4 font-bold text-lg rounded-sm hover:bg-white hover:text-secondary transition-all duration-300"
            >
              VIEW MEMBERSHIP PLANS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
