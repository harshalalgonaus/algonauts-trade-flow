
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Target, Brain, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Cash Management",
      description: "Automated equity trading solutions with advanced portfolio curation and real-time market analysis for optimal cash management.",
      features: [
        "Price Action Portfolio Curator",
        "Market Phase Detection",
        "Targeted Trade Execution",
        "Real-time Risk Assessment"
      ],
      link: "/cash-management",
      color: "blue"
    },
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,  
      title: "F&O Management",
      description: "Advanced F&O trading system with diversified portfolios, real-time signal management, and automated trade execution.",
      features: [
        "Dynamic Portfolio Configurator",
        "Daily Portfolio Builder",
        "Real-time Signal Management",
        "Automated Trade Execution"
      ],
      link: "/fo-management",
      color: "purple"
    },
    {
      icon: <Brain className="h-12 w-12 text-green-600" />,
      title: "Algorithmic Trading",
      description: "AI Trade Manager combining cash management and F&O systems into a hybrid algorithmic trading solution.",
      features: [
        "Autonomous Stock Selection",
        "Advanced Stock Management",
        "Risk Adjusted Trade Management",
        "Fast Trade Execution"
      ],
      link: "/algorithmic-trading",
      color: "green"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
      title: "AI Research",
      description: "Comprehensive research platform with real-time data analysis, equity research, and advanced forecasting capabilities.",
      features: [
        "Real-Time Data Research",
        "Equity & Company Research",
        "Live Fund Analysis Dashboards",
        "Advanced Forecasting"
      ],
      link: "/ai-research",
      color: "orange",
      badge: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3Ccircle cx='55' cy='55' r='5'/%3E%3Ccircle cx='5' cy='55' r='5'/%3E%3Ccircle cx='55' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Our Services
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4">
              Comprehensive Trading Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Discover our complete suite of algorithmic trading and research services designed to maximize 
            your investment potential with cutting-edge technology and 20+ years of market expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Trading Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cash management to advanced algorithmic trading, we provide everything you need 
              to succeed in today's financial markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative overflow-hidden">
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 bg-${service.color}-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link to={service.link}>
                      <Button className="w-full group transition-all duration-300 hover:scale-105">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Algonauts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our comprehensive approach to algorithmic trading.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
              <p className="text-gray-600">Combined market expertise in algorithmic trading</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5s</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Trade Execution</div>
              <p className="text-gray-600">Lightning-fast automated trade execution</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Market Monitoring</div>
              <p className="text-gray-600">Continuous real-time market analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Join thousands of traders who trust Algonauts Technologies for their algorithmic trading needs. 
            Start your journey to automated trading success today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/open-account">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Open Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
