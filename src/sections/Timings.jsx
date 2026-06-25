export default function Timings() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-oswald text-primary text-xl tracking-widest mb-4">GYM TIMINGS</h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white">
            WHEN WE'RE <span className="text-primary">OPEN</span>
          </h3>
        </div>
        <div className="bg-accent p-8 md:p-12 rounded-sm border border-gray-800 fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-bebas text-3xl text-primary mb-2">Monday - Saturday</h4>
              <p className="font-inter text-white text-2xl">5:00 AM - 11:00 PM</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-bebas text-3xl text-primary mb-2">Sunday</h4>
              <p className="font-inter text-white text-2xl">6:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="font-inter text-gray-400">Note: Timings are editable - update as needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
