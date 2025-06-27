
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Algonauts
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Pioneering algorithmic trading with two decades of financial expertise 
            and cutting-edge technology innovation.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Our Story */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Founded with a vision to democratize sophisticated trading strategies, 
              Algonauts Technologies has grown from a small team of financial engineers 
              to a leading provider of algorithmic trading solutions in India.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey began with the simple belief that technology could make 
              financial markets more accessible and profitable for retail investors. 
              Today, we continue to innovate and push the boundaries of what's possible 
              in automated trading.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower investors with advanced algorithmic trading solutions 
                that combine cutting-edge technology with proven financial strategies, 
                making sophisticated trading accessible to all.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading provider of algorithmic trading solutions in India, 
                continuously innovating to deliver superior risk-adjusted returns 
                for our clients while maintaining the highest standards of transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
