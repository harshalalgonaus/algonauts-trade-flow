
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black leading-tight">
                Two Decades of Financial Excellence
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Algonauts brings together a unique blend of finance and technology expertise, 
                with over 20 years of combined experience in automated algorithmic trading.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Two decades of consistent performance in financial markets through systematic and disciplined approaches.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">Technology Leadership</h3>
                  <p className="text-gray-600">
                    Cutting-edge algorithmic systems built on advanced statistical and mathematical models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">Risk Management</h3>
                  <p className="text-gray-600">
                    Sophisticated risk controls and monitoring systems ensure capital preservation while maximizing returns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
            <div className="bg-black text-white p-8 rounded-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer group">
              <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-gray-300">Years Combined Experience</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg mt-8 hover:scale-105 transition-all duration-500 hover:shadow-xl cursor-pointer group hover:bg-gray-50">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600">Trading Algorithms</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg -mt-8 hover:scale-105 transition-all duration-500 hover:shadow-xl cursor-pointer group hover:bg-gray-50">
              <div className="text-3xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-600">Market Monitoring</div>
            </div>
            <div className="bg-black text-white p-8 rounded-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer group">
              <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300">System Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
