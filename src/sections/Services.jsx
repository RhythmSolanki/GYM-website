export default function Services() {
  const services = [
    {
      title: 'Personal Training (Male)',
      desc: 'Customized training programs for muscle gain, fat loss, and strength development.',
      icon: '🏋️'
    },
    {
      title: 'Personal Training (Female)',
      desc: 'Fitness coaching focused on strength, weight management, and overall wellness.',
      icon: '💪'
    },
    {
      title: 'Yoga Classes',
      desc: 'Improve flexibility, mobility, balance, and mental well-being.',
      icon: '🧘'
    },
    {
      title: 'Pilates Classes',
      desc: 'Core strengthening, posture improvement, and body conditioning.',
      icon: '🤸'
    },
    {
      title: 'Weight Loss Programs',
      desc: 'Structured fitness plans with expert guidance.',
      icon: '⚖️'
    },
    {
      title: 'Strength & Muscle Building',
      desc: 'Performance-focused training programs.',
      icon: '💯'
    }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">OUR SERVICES</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            WHAT WE <span className="text-primary">OFFER</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 rounded-sm border border-gray-800 hover:border-primary hover:glow-red transition-all duration-300 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="font-bebas text-2xl text-white mb-4">{service.title}</h4>
              <p className="font-inter text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
