export default function Trainers() {
  const trainers = [
    { name: 'John Smith', specialization: 'Strength Training', experience: '8 Years', placeholder: '/images/trainer-1.jpg' },
    { name: 'Sarah Johnson', specialization: 'Weight Loss', experience: '6 Years', placeholder: '/images/trainer-2.jpg' },
    { name: 'Mike Chen', specialization: 'Bodybuilding', experience: '10 Years', placeholder: '/images/trainer-3.jpg' },
    { name: 'Emily Davis', specialization: 'Yoga & Pilates', experience: '5 Years', placeholder: '/images/trainer-4.jpg' }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">OUR TEAM</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            EXPERT <span className="text-primary">TRAINERS</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-accent rounded-sm overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="aspect-[3/4] bg-secondary flex items-center justify-center border-b-2 border-dashed border-gray-700">
                <div className="text-center text-gray-500">
                  <span className="text-5xl">👤</span>
                  <p className="mt-2 font-inter">Add your image</p>
                  <p className="text-sm">{trainer.placeholder}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bebas text-2xl text-white mb-1">{trainer.name}</h4>
                <p className="font-inter text-primary mb-2">{trainer.specialization}</p>
                <p className="font-inter text-gray-400 text-sm">{trainer.experience} Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
