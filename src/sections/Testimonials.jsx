export default function Testimonials() {
  const testimonials = [
    { name: 'Rahul Sharma', quote: 'Lost 15kg in 3 months! The trainers are amazing and the environment is so motivating.', rating: 5 },
    { name: 'Priya Patel', quote: 'Best gym in town! The yoga classes are fantastic and I feel stronger than ever.', rating: 5 },
    { name: 'Amit Kumar', quote: 'Great equipment, clean facilities, and friendly staff. Highly recommend!', rating: 5 }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">TESTIMONIALS</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            WHAT OUR <span className="text-primary">MEMBERS SAY</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-accent p-8 rounded-sm border border-gray-800 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="text-primary text-2xl mb-4">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="font-inter text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="font-bebas text-xl text-white">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
