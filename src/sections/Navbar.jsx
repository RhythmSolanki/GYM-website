export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <h1 className="font-bebas text-3xl md:text-4xl text-white tracking-wider">
              FITNESS <span className="text-primary">THEATER</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === 'Home' ? 'hero' : item.toLowerCase())}
                className="font-inter text-white hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('pricing')}
              className="bg-primary text-white px-6 py-2 font-semibold rounded-sm hover:bg-red-700 transition-colors duration-300 glow-red-hover"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
