
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, TrendingUp, BarChart3, Search, PieChart, LineChart, Clock, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIResearch = () => {
  const researchFeatures = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Real-Time Data",
      description: "Access to live market data streams with instant updates and comprehensive coverage across all major financial instruments.",
      details: [
        "Live market data streaming",
        "Real-time price updates",
        "Comprehensive market coverage",
        "Instant data synchronization"
      ]
    }
  ];

  const equityResearchFeatures = [
    {
      icon: <Search className="h-8 w-8 text-green-600" />,
      title: "Stock Research",
      description: "In-depth analysis of individual stocks with comprehensive fundamental and technical research capabilities.",
      details: [
        "Fundamental analysis tools",
        "Technical indicator analysis",
        "Price pattern recognition",
        "Performance metrics evaluation"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Company Research",
      description: "Comprehensive company analysis including financial health, management quality, and business model evaluation.",
      details: [
        "Financial statement analysis",
        "Management quality assessment",
        "Business model evaluation",
        "Competitive positioning analysis"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
      title: "Company Cyclic Research",
      description: "Analysis of company performance across different market cycles and economic conditions.",
      details: [
        "Economic cycle analysis",
        "Seasonal performance patterns",
        "Market cycle correlation",
        "Long-term trend identification"
      ]
    },
    {
      icon: <PieChart className="h-8 w-8 text-red-600" />,
      title: "Comparison Research",
      description: "Comparative analysis tools for benchmarking stocks against peers and market indices.",
      details: [
        "Peer comparison analysis",
        "Industry benchmarking",
        "Market relative performance",
        "Competitive advantage assessment"
      ]
    }
  ];

  const dashboardFeatures = [
    {
      icon: <LineChart className="h-8 w-8 text-indigo-600" />,
      title: "Fund Research",
      description: "Comprehensive mutual fund and ETF analysis with performance tracking and risk assessment.",
      details: [
        "Fund performance analysis",
        "Risk-adjusted returns",
        "Expense ratio comparison",
        "Fund manager track record"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600" />,
      title: "Fund Analysis",
      description: "Deep dive analysis of fund holdings, allocation strategies, and portfolio construction.",
      details: [
        "Portfolio holdings analysis",
        "Asset allocation breakdown",
        "Sector and geographic exposure",
        "Risk concentration metrics"
      ]
    },
    {
      icon: <PieChart className="h-8 w-8 text-pink-600" />,
      title: "Asset Class Research",
      description: "Cross-asset class analysis including equities, bonds, commodities, and alternative investments.",
      details: [
        "Multi-asset class analysis",
        "Correlation analysis",
        "Asset allocation optimization",
        "Risk-return profiling"
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-cyan-600" />,
      title: "Forecasting",
      description: "AI-powered predictive analytics for market trends, price movements, and economic indicators.",
      details: [
        "AI-driven market predictions",
        "Price movement forecasting",
        "Economic indicator analysis",
        "Trend prediction models"
      ]
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
            AI Research
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4">
              Advanced Market Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Comprehensive research platform powered by artificial intelligence, providing real-time market insights, 
            equity analysis, and predictive forecasting capabilities.
          </p>

          <div className="bg-yellow-600 text-black px-6 py-3 rounded-lg inline-block mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Coming Soon - This segment will be launched soon</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Get Notified
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Research Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Research Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time data processing and analysis capabilities for comprehensive market research.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {researchFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
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

      {/* Equity Research Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Equity Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive equity analysis tools for informed investment decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {equityResearchFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
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

      {/* Live Dashboards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Live Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time analytics and forecasting tools for comprehensive market analysis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Stay Updated on AI Research Launch
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Be the first to experience our revolutionary AI-powered research platform. 
            Get notified when we launch and gain access to cutting-edge market intelligence tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Contact Us for Updates
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/open-account">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Open Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIResearch;
