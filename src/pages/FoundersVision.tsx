
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const FoundersVision = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <h1 className="text-5xl font-bold text-black mb-6">Founder's Vision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the Future of Intelligent Trading Through AI Innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black leading-tight">
                  The AI Trade Manager Revolution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our vision is to democratize sophisticated trading strategies through artificial intelligence. 
                  We're creating an AI Trade Manager that combines decades of financial expertise with 
                  cutting-edge machine learning to deliver unprecedented trading performance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This isn't just about automation – it's about intelligent decision-making that adapts, 
                  learns, and evolves with market conditions in real-time.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black">Intelligent Decision Engine</h3>
                </div>
                <p className="text-gray-600">
                  Our AI Trade Manager processes thousands of market signals simultaneously, 
                  making split-second decisions based on complex pattern recognition and predictive analytics.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Machine Learning Core</h3>
              <p className="text-gray-600">
                Advanced neural networks that continuously learn from market data, 
                improving trading strategies with every transaction.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Real-Time Execution</h3>
              <p className="text-gray-600">
                Microsecond trade execution with dynamic risk management, 
                ensuring optimal entry and exit points across all market conditions.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 animate-[fade-in_0.8s_ease-out_1.2s_forwards]">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Adaptive Risk Control</h3>
              <p className="text-gray-600">
                Self-adjusting risk parameters that respond to market volatility, 
                protecting capital while maximizing growth opportunities.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-12 rounded-2xl opacity-0 animate-[fade-in_0.8s_ease-out_1.4s_forwards]">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold">The Future is Intelligent Trading</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We envision a world where every investor has access to institutional-grade AI trading capabilities. 
                Our mission is to level the playing field, making sophisticated algorithmic trading accessible, 
                transparent, and profitable for everyone.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-3">What We're Building</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Self-evolving trading algorithms</li>
                    <li>• Predictive market analysis engines</li>
                    <li>• Autonomous portfolio management</li>
                    <li>• Real-time risk optimization</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-3">Our Impact</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Democratizing institutional trading</li>
                    <li>• Reducing human bias and emotion</li>
                    <li>• Maximizing market efficiency</li>
                    <li>• Creating sustainable wealth growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoundersVision;
