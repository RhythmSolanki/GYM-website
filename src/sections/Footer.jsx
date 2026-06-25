export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-bebas text-3xl text-white mb-4">
              FITNESS <span className="text-primary">THEATER</span>
            </h3>
            <p className="font-inter text-gray-400">
              Transform Your Body. Elevate Your Lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-bebas text-xl text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item === 'Home' ? 'hero' : item.toLowerCase())}
                    className="font-inter text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bebas text-xl text-white mb-4">FOLLOW US</h4>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                <button key={index} className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <span className="text-lg">{index === 0 ? '📘' : index === 1 ? '📷' : index === 2 ? '🐦' : '📺'}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="font-inter text-gray-500">
            © {new Date().getFullYear()} Fitness Theater. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
