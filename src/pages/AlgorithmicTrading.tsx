
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Eye, Target, Shield, BarChart3, Zap, Brain, Settings, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const AlgorithmicTrading = () => {
  const workflowSteps = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AUTONOMOUS STOCK SELECTION",
      description: "With advanced real-time stock selection technique that is faster and reliable than a typical fund manager which has no emotions or greed, studies the market and selects the best stocks to trade in automatically.",
      category: "Cash Management System",
      features: [
        "Advanced real-time stock selection",
        "Emotion-free trading decisions",
        "Faster than traditional fund managers",
        "Automatic market analysis"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-green-600" />,
      title: "ADVANCED STOCK MANAGEMENT",
      description: "Trading Stock with different strategies working together similar to our Cash Management analysis and investing pledgeable securities from which you can get a fixed margin to trade in F&O Segment, with managing those pledgeable securities too.",
      category: "Cash Management System",
      features: [
        "Multiple trading strategies integration",
        "Pledgeable securities management",
        "Fixed margin generation for F&O",
        "Comprehensive portfolio oversight"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "DIVERSIFIED TRADE SETUP",
      description: "Strategic portfolio diversification across multiple asset classes and trading instruments, ensuring optimal risk distribution and enhanced profit potential through our sophisticated allocation algorithms.",
      category: "F&O Management System",
      features: [
        "Multi-asset portfolio diversification",
        "Strategic risk distribution",
        "Sophisticated allocation algorithms",
        "Enhanced profit optimization"
      ]
    },
    {
      icon: <Activity className="h-8 w-8 text-orange-600" />,
      title: "RISK ADJUSTED REAL-TIME TRADE MANAGEMENT",
      description: "Continuous risk assessment and real-time trade adjustments based on market conditions, volatility patterns, and predefined risk parameters to ensure optimal trade management.",
      category: "F&O Management System",
      features: [
        "Continuous risk assessment",
        "Real-time trade adjustments",
        "Volatility pattern analysis",
        "Predefined risk parameters"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: "FAST TRADE EXECUTION AND EVALUATION",
      description: "Lightning-fast trade execution within approximately 5 seconds, coupled with immediate trade evaluation and performance assessment for continuous system optimization.",
      category: "F&O Management System",
      features: [
        "5-second trade execution",
        "Immediate performance assessment",
        "Continuous system optimization",
        "Real-time trade evaluation"
      ]
    }
  ];

  const hybridFeatures = [
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      title: "Quant Fund Structure",
      description: "Acts like a professional quant fund with additional trading system capabilities"
    },
    {
      icon: <Eye className="h-6 w-6 text-green-500" />,
      title: "Real-time Analysis",
      description: "Continuous market monitoring and instant decision-making capabilities"
    },
    {
      icon: <Target className="h-6 w-6 text-purple-500" />,
      title: "Hybrid Architecture",
      description: "Combines Cash Management and F&O Management systems seamlessly"
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      title: "Advanced Risk Management",
      description: "Multi-layered risk control systems across all trading operations"
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
            AI Trade Manager
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4">
              Algorithmic Trading Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Our AI Trade Manager consists of Automated or Autonomous systems altogether at a single place 
            which is a hybrid structure of Cash Management and F&O Management. A comprehensive trading system 
            that acts like a quant fund with additional advanced features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
              Start AI Trading
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Link to="/contact-us">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Combined Workflow Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hybrid algorithmic trading system combines the best of both Cash Management and F&O Management 
              systems into a unified, intelligent trading solution.
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <CardTitle className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                            Step {index + 1}: {step.title}
                          </CardTitle>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            step.category === "Cash Management System" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-purple-100 text-purple-800"
                          }`}>
                            {step.category}
                          </span>
                        </div>
                        <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 bg-gray-100 p-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hybrid System Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of our integrated AI Trade Manager that combines multiple trading methodologies 
              into one comprehensive solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hybridFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Integrated Trading Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our AI Trade Manager seamlessly integrates our proven Cash Management and F&O Management systems 
              to create a powerful algorithmic trading solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Cash Management Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                  Leverages our advanced cash management algorithms for stock selection and portfolio management, 
                  providing the foundation for intelligent trading decisions.
                </CardDescription>
                <Link to="/cash-management">
                  <Button variant="outline" className="w-full group">
                    Learn About Cash Management
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  F&O Management Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                  Incorporates our sophisticated F&O management system for derivatives trading, risk management, 
                  and rapid trade execution capabilities.
                </CardDescription>
                <Link to="/fo-management">
                  <Button variant="outline" className="w-full group">
                    Learn About F&O Management
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Experience the Future of Algorithmic Trading
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Our AI Trade Manager represents the pinnacle of automated trading technology, combining advanced 
            algorithms, real-time analysis, and intelligent risk management into one powerful platform. 
            Join the revolution in algorithmic trading today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/open-account">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Open Trading Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlgorithmicTrading;
