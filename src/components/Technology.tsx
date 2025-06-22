
export const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                Proprietary Technology Platform
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our strategies work on proprietary logic that has been programmed into our advanced 
                trading system, delivering consistent performance through mathematical precision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-semibold mb-2">Advanced Mathematical Models</h3>
                <p className="text-gray-300">
                  Sophisticated algorithms built on proven mathematical foundations and statistical analysis.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
                <p className="text-gray-300">
                  High-performance computing infrastructure capable of processing millions of data points per second.
                </p>
              </div>

              <div className="border-l-2 border-white pl-6">
                <h3 className="text-xl font-semibold mb-2">Machine Learning Integration</h3>
                <p className="text-gray-300">
                  Adaptive algorithms that continuously learn and evolve with changing market conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">System Performance</span>
                <span className="text-green-400 text-sm">Optimal</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Latency</span>
                  <span className="text-white">0.2ms</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Algorithm Accuracy</span>
                <span className="text-green-400 text-sm">97.3%</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-white">97.3%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Data Processing</span>
                <span className="text-green-400 text-sm">5.2M/sec</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Throughput</span>
                  <span className="text-white">5.2M signals/sec</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
