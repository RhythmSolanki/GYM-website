export default function About() {
  const highlights = [
    { title: 'Modern Equipment', desc: 'Top-of-the-line strength and cardio machines' },
    { title: 'Clean Environment', desc: 'Spotlessly clean facilities for your safety' },
    { title: 'Expert Trainers', desc: 'Certified professionals to guide you' },
    { title: 'Strength Training', desc: 'Comprehensive free weights and machines' },
    { title: 'Weight Loss Programs', desc: 'Customized plans for your goals' },
    { title: 'Community Atmosphere', desc: 'Motivating and supportive members' }
  ];

  return (
    <section id="about" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">ABOUT US</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white mb-6">
            WELCOME TO <span className="text-primary">FITNESS THEATER</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-secondary p-8 rounded-sm border border-gray-800 hover:border-primary transition-all duration-300 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h4 className="font-bebas text-2xl text-white mb-2">{item.title}</h4>
              <p className="font-inter text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
