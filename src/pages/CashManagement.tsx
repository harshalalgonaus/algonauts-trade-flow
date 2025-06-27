
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Eye, Target, Shield, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CashManagement = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Price Action Portfolio Curator",
      description: "Based on various Technical Analysis and our Principle Trade Secret, stocks are curated and deployed in a portfolio automatically. The system creates and manages the portfolio autonomously over time.",
      details: [
        "Advanced technical analysis integration",
        "Proprietary trade secret algorithms",
        "Automated portfolio creation and deployment",
        "Self-managed portfolio optimization"
      ]
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Market Phase Detection",
      description: "Real-time market condition assessment on fixed frequency intervals, allowing the system to make risk-curated decisions for higher profits and lower risks within the portfolio.",
      details: [
        "Real-time market condition monitoring",
        "Fixed frequency risk assessment intervals",
        "Dynamic decision-making algorithms",
        "Optimized profit-to-risk ratios"
      ]
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Targeted Trade Execution",
      description: "Our in-house trade algorithm trades every stock individually within the portfolio and provides an edge by switching to cash or zero investment state during poor market conditions.",
      details: [
        "Individual stock trading algorithms",
        "Smart cash position management",
        "Market condition-based execution",
        "Zero investment state capability"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
      title: "Higher Returns",
      description: "Optimized algorithms for maximum profit generation"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Real-time Processing",
      description: "Continuous market monitoring and instant execution"
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
            Cash Management
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4">
              Automated Equity Trading Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Our comprehensive cash management system consists of three major steps in our workflow, 
            essential for algorithmic equity trading with over 20+ years of market expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/open-account">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Three-Step Workflow Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automated cash management system follows a systematic approach to maximize returns while minimizing risks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    Step {index + 1}: {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of our professional automated trading system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Professional Automated Cash Management
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            These steps are integral to our Automated Cash Management Algorithm, created by a professional 
            with 20+ years of experience in the stock market. A system designed and managed for your 
            personal and professional investment needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/open-account">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
              Start Trading
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

export default CashManagement;
