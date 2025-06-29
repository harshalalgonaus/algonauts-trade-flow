
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, AlertTriangle, TrendingDown, BarChart3, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RiskManagement = () => {
  const riskMetrics = [
    {
      title: "Value at Risk (VaR)",
      value: "₹2.5L",
      description: "95% confidence level daily VaR",
      icon: TrendingDown,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Maximum Drawdown",
      value: "8.5%",
      description: "Historical maximum portfolio decline",
      icon: BarChart3,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Sharpe Ratio",
      value: "2.1",
      description: "Risk-adjusted return measure",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Risk Coverage",
      value: "98.5%",
      description: "Portfolio positions under risk monitoring",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const riskControls = [
    {
      title: "Position Sizing",
      description: "Dynamic position sizing based on volatility and correlation analysis",
      features: ["Kelly Criterion implementation", "Volatility-based allocation", "Correlation adjustments"]
    },
    {
      title: "Stop Loss Management",
      description: "Automated stop-loss orders with trailing mechanisms",
      features: ["Technical stop-loss levels", "Volatility-based stops", "Time-based exits"]
    },
    {
      title: "Diversification Controls",
      description: "Portfolio diversification across sectors, strategies, and timeframes",
      features: ["Sector exposure limits", "Strategy correlation monitoring", "Geographic diversification"]
    },
    {
      title: "Stress Testing",
      description: "Regular stress testing under various market scenarios",
      features: ["Historical scenario analysis", "Monte Carlo simulations", "Black swan event modeling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Risk Management
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100">
                Comprehensive risk control systems protecting your investments
              </p>
              <div className="flex justify-center">
                <Shield className="h-16 w-16 text-red-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Risk Metrics Dashboard */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Risk Metrics</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Monitor key risk indicators and portfolio health metrics in real-time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${metric.bgColor} mb-3`}>
                        <Icon className={`h-6 w-6 ${metric.color}`} />
                      </div>
                      <CardTitle className="text-lg font-semibold">{metric.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-2xl font-bold ${metric.color} mb-2`}>
                        {metric.value}
                      </div>
                      <p className="text-sm text-gray-600">{metric.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Risk Control Systems */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Risk Control Systems</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced risk management tools and automated controls
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {riskControls.map((control, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      {control.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{control.description}</p>
                    <ul className="space-y-2">
                      {control.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Management Philosophy */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Risk Management Philosophy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Capital Preservation</h3>
                  <p className="text-gray-600">
                    Protecting your capital is our first priority through rigorous risk controls
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quantitative Approach</h3>
                  <p className="text-gray-600">
                    Data-driven risk assessment using advanced mathematical models
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Adaptive Controls</h3>
                  <p className="text-gray-600">
                    Dynamic risk parameters that adapt to changing market conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Protect Your Investments?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Experience our comprehensive risk management system designed to safeguard your portfolio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Risk Dashboard
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Schedule Risk Assessment
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RiskManagement;
