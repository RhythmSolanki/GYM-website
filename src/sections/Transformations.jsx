export default function Transformations() {
  const transformations = [
    { before: '/images/transformation-1-before.jpg', after: '/images/transformation-1-after.jpg' },
    { before: '/images/transformation-2-before.jpg', after: '/images/transformation-2-after.jpg' },
    { before: '/images/transformation-3-before.jpg', after: '/images/transformation-3-after.jpg' }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">TRANSFORMATIONS</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            REAL <span className="text-primary">RESULTS</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <div key={index} className="space-y-4 fade-in" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center border-2 border-dashed border-gray-700">
                  <div className="text-center text-gray-500 p-4">
                    <span className="text-3xl">📷</span>
                    <p className="mt-1 font-inter text-sm">Before</p>
                    <p className="text-xs">{item.before}</p>
                  </div>
                </div>
                <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center border-2 border-dashed border-gray-700">
                  <div className="text-center text-gray-500 p-4">
                    <span className="text-3xl">📷</span>
                    <p className="mt-1 font-inter text-sm">After</p>
                    <p className="text-xs">{item.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
