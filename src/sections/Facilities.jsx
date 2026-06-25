export default function Facilities() {
  const facilities = [
    { name: 'Strength Machines', placeholder: '/images/facility-1.jpg' },
    { name: 'Free Weights', placeholder: '/images/facility-2.jpg' },
    { name: 'Cardio Equipment', placeholder: '/images/facility-3.jpg' },
    { name: 'Functional Training', placeholder: '/images/facility-4.jpg' }
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">OUR FACILITIES</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            PREMIUM <span className="text-primary">EQUIPMENT</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-sm fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="aspect-square bg-accent flex items-center justify-center border-2 border-dashed border-gray-700">
                <div className="text-center text-gray-500">
                  <span className="text-4xl">📷</span>
                  <p className="mt-2 font-inter">Add your image</p>
                  <p className="text-sm">{item.placeholder}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end">
                <div className="p-6">
                  <h4 className="font-bebas text-2xl text-white">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
