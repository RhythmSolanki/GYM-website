import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Facilities from './sections/Facilities';
import Services from './sections/Services';
import Trainers from './sections/Trainers';
import Pricing from './sections/Pricing';
import Timings from './sections/Timings';
import Transformations from './sections/Transformations';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Services />
      <Trainers />
      <Pricing />
      <Timings />
      <Transformations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
