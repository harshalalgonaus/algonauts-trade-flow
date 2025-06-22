
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3Ccircle cx='55' cy='55' r='5'/%3E%3Ccircle cx='5' cy='55' r='5'/%3E%3Ccircle cx='55' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-gray-300 text-sm font-semibold tracking-wider uppercase">
                20+ Years of Excellence
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Power your financial growth with 
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> algorithmic</span> precision
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              We are a team of finance and technology professionals with a strong belief in automated algorithmic trading, providing superior returns through seamless execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
                View Strategies
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Algorithm Performance</span>
                  <span className="text-green-400 text-sm">+24.7% YTD</span>
                </div>
                <div className="h-32 bg-gray-800 rounded flex items-end justify-between p-4 space-x-1">
                  {[65, 78, 52, 83, 91, 76, 88, 94, 82, 89, 95, 87].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-gray-600 to-white flex-1 rounded-sm"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div>
                    <p className="text-white font-semibold">156</p>
                    <p className="text-gray-400 text-xs">Active Strategies</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">$2.4M</p>
                    <p className="text-gray-400 text-xs">Assets Under Management</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">99.8%</p>
                    <p className="text-gray-400 text-xs">Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
