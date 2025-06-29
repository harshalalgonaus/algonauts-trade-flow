
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3Ccircle cx='55' cy='55' r='5'/%3E%3Ccircle cx='5' cy='55' r='5'/%3E%3Ccircle cx='55' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-bounce opacity-30"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-20"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-gray-300 text-sm font-semibold tracking-wider uppercase opacity-0 animate-[fade-in_0.6s_ease-out_0.2s_forwards]">
                20+ Years of Excellence
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
                Power your financial growth with 
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse"> algorithmic</span> precision
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
              We are a team of finance and technology professionals with a strong belief in automated algorithmic trading, providing superior returns through seamless execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
              <Link to="/services">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </Link>
              <Link to="/view-strategies">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Strategies
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Algorithm Performance</span>
                  <span className="text-green-400 text-sm font-semibold animate-pulse">+24.7% YTD</span>
                </div>
                <div className="h-32 bg-gray-800 rounded flex items-end justify-between p-4 space-x-1">
                  {[65, 78, 52, 83, 91, 76, 88, 94, 82, 89, 95, 87].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-gray-600 to-white flex-1 rounded-sm transition-all duration-700 hover:scale-110"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${index * 0.1}s`,
                        animation: `slide-up 0.8s ease-out ${index * 0.1}s forwards`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div className="group cursor-pointer">
                    <p className="text-white font-semibold text-lg group-hover:scale-110 transition-transform duration-300">156</p>
                    <p className="text-gray-400 text-xs">Active Strategies</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-white font-semibold text-lg group-hover:scale-110 transition-transform duration-300">$2.4M</p>
                    <p className="text-gray-400 text-xs">Assets Under Management</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-white font-semibold text-lg group-hover:scale-110 transition-transform duration-300">99.8%</p>
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
