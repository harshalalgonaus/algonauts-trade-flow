
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">
                Two Decades of Financial Excellence
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Algonauts brings together a unique blend of finance and technology expertise, 
                with over 20 years of combined experience in automated algorithmic trading.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Two decades of consistent performance in financial markets through systematic and disciplined approaches.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Technology Leadership</h3>
                  <p className="text-gray-600">
                    Cutting-edge algorithmic systems built on advanced statistical and mathematical models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Risk Management</h3>
                  <p className="text-gray-600">
                    Sophisticated risk controls and monitoring systems ensure capital preservation while maximizing returns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black text-white p-8 rounded-lg">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-gray-300">Years Combined Experience</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg mt-8">
              <div className="text-3xl font-bold text-black mb-2">100+</div>
              <div className="text-gray-600">Trading Algorithms</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg -mt-8">
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">Market Monitoring</div>
            </div>
            <div className="bg-black text-white p-8 rounded-lg">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300">System Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
