export default function Pricing() {
  const plans = [
    { name: 'Monthly Plan', price: '₹XXXX', features: ['Unlimited Gym Access', 'Locker Facility', 'Free Parking', '2 Group Classes/Month'], popular: false },
    { name: 'Quarterly Plan', price: '₹XXXX', features: ['Unlimited Gym Access', 'Locker Facility', 'Free Parking', '4 Group Classes/Month', '1 Personal Training Session'], popular: true },
    { name: 'Annual Plan', price: '₹XXXX', features: ['Unlimited Gym Access', 'Locker Facility', 'Free Parking', 'Unlimited Group Classes', '4 Personal Training Sessions', 'Nutrition Consultation'], popular: false }
  ];

  return (
    <section id="pricing" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">PRICING</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            CHOOSE YOUR <span className="text-primary">PLAN</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-secondary p-8 rounded-sm border-2 ${plan.popular ? 'border-primary glow-red' : 'border-gray-800'} transition-all duration-300 fade-in hover:border-primary hover:glow-red`} style={{ transitionDelay: `${index * 100}ms` }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 font-bebas text-lg">
                  MOST POPULAR
                </div>
              )}
              <h4 className="font-bebas text-2xl text-white mb-4">{plan.name}</h4>
              <div className="mb-6">
                <span className="font-bebas text-5xl text-primary">{plan.price}</span>
                <span className="font-inter text-gray-400 ml-2">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="font-inter text-gray-300 flex items-center">
                    <span className="text-primary mr-3">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-bold text-lg rounded-sm transition-all duration-300 ${plan.popular ? 'bg-primary text-white hover:bg-red-700' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
