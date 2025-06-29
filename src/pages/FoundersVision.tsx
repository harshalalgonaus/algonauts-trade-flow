
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
              Revolutionizing Wealth Management Through Automated Intelligence
            </p>
          </div>

          {/* Founder's Vision */}
          <div className="mb-20 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
            <div className="bg-black text-white p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Founder's Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed text-center max-w-5xl mx-auto">
                To build and trade portfolios of all asset classes across the world using automated systems 
                to optimally manage client wealth with maximum returns and controlled risk without human 
                intervention at any stage.
              </p>
            </div>
          </div>

          {/* Company Vision Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-black text-center mb-12 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
              Company Vision & Roadmap
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Last 5 Years */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5Y</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black">Foundation Years</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To manage equity cash and F&O portfolios through automated systems to generate wealth 
                  and control risk without human intervention at any stage.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-600">
                  <p className="text-gray-600 font-medium">Impact:</p>
                  <p className="text-gray-700">
                    Bringing down fund management costs significantly for investors who pay a substantial 
                    portion of their funds as fees for below par performance.
                  </p>
                </div>
              </div>

              {/* Next 2 Years */}
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-2xl opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">2Y</span>
                  </div>
                  <h3 className="text-2xl font-bold">Expansion Phase</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To create systems to build portfolios across different asset classes and dynamically 
                  move across asset classes that align with current market conditions to generate wealth 
                  for investors.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-white">
                  <p className="text-gray-300 font-medium">Focus:</p>
                  <p className="text-white">
                    Multi-asset class portfolio management with intelligent asset allocation based on 
                    real-time market dynamics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Strategy */}
          <div className="mb-20 opacity-0 animate-[fade-in_0.8s_ease-out_1.2s_forwards]">
            <h2 className="text-4xl font-bold text-black text-center mb-12">Strategic Approach</h2>
            
            <div className="bg-gradient-to-r from-gray-50 to-white p-12 rounded-2xl border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Global Data Platform</h3>
                  <p className="text-gray-600">
                    Comprehensive tracking of data from across the world
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Optimal Strategies</h3>
                  <p className="text-gray-600">
                    Generate strategies for different asset classes and risk profiles
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Dynamic Allocation</h3>
                  <p className="text-gray-600">
                    Identify ideal capital allocation based on market conditions
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  We plan to develop a <strong>holistic platform</strong> that tracks data from across the world 
                  and generates optimal strategies to deal with different asset classes, especially with regard 
                  to their different return characteristics and risk features. This platform will enable the 
                  company to generate returns for investors by identifying the ideal capital allocation across 
                  asset classes based on current market conditions, while also enabling investors to build 
                  optimum portfolios within asset classes based on market conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8 opacity-0 animate-[fade-in_0.8s_ease-out_1.4s_forwards]">
            <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-black mb-4">For Investors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Significantly reduced fund management costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Superior performance compared to traditional fund management</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Automated wealth generation with controlled risk</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Access to institutional-grade trading strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-black text-white p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">For the Market</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Democratized access to sophisticated trading systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Elimination of human bias and emotional decision-making</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced market efficiency through AI-driven strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>Continuous innovation in wealth management technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoundersVision;
