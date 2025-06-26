
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingUp, Target, Zap, Eye, AlertTriangle, Filter, RotateCcw, BarChart3 } from 'lucide-react';

const FOManagement = () => {
  const mainSteps = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "DYNAMIC PORTFOLIO CONFIGURATOR",
      description: "We provide you with multiple portfolios that you can trade in at the same time by our system. You can pick and choose if you are comfortable with your own choice of portfolio, based on your investment amount and risk profile this selection is done by the system."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "DYNAMIC DAILY PORTFOLIO BUILDER",
      description: "A Mini portfolio is built daily by our system for both Long-Short Trades separately from the portfolio that were provided in the above step, which is traded by our next step in the system that is commonly known as Trade Management System."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "REAL-TIME LONG/SHORT SIGNAL MANAGEMENT",
      description: "The Mini Portfolios that were created are now traded by our in-house built platform that allows us to manage trade in real time based on a specific frequency that is chosen by the system. The system can Trade Intraday and can take Positional Calls based on the Market Scenario and Our System Analysis. Every Day the set of calls can be different as Market Conditions Differ."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "AUTOMATED TRADE EXECUTION",
      description: "The Quantity of the trade and the Signal that is provided by the above steps helps us to Execute the Trades In Approximately 5 Seconds, so that quick execution can take place by our In-House automated Trade Execution Platform."
    }
  ];

  const tradeEvaluationSystems = [
    {
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      title: "MARKET PHASE DETECTION",
      description: "This system uses an Foundational AI Technique to detect market phase in real-time as Bullish, Bearish and Sideways according to the analysis provided in real time we manage the above signals or trades more efficiently."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      title: "DAILY RISK ANALYSER",
      description: "Based On Market Ending Conditions and next day strategies there is a system in-place which helps us to cut-off all the positional trades, if there is an indication that an external event or a huge event can take place the very next day which can lead to high losses."
    },
    {
      icon: <Filter className="h-6 w-6 text-yellow-500" />,
      title: "TRADE INTENSITY FILTER",
      description: "This system allows us to identify the intensity of the trades in the market at various different intervals of time. If the Filter gives a red signal then we revert the risks and the system takes necessary actions."
    },
    {
      icon: <RotateCcw className="h-6 w-6 text-green-500" />,
      title: "AUTOMATED TRADE ROLLOVER",
      description: "Automated Rollover of positional and portfolio trades at Expiry."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "QUARTERLY RESULTS VOLATILITY SHIELD",
      description: "This a system which allows to shield the stocks at time of quarterly results that have high chances of volatility in the market and can be triggered in any direction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            F&O Management
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Advanced system that allows you to Trade in F&O market with very low risks and good diversification where we provide Diversified Portfolio that you can choose from to start your F&O Trading.
          </p>
        </div>

        {/* Main Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our F&O Trading System
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mainSteps.map((step, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trade Evaluation Systems */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Trade Evaluation Systems
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            The Trade Evaluation Consists of many important features that are separate systems all together:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradeEvaluationSystems.map((system, index) => (
              <Card key={index} className="border hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {system.icon}
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {system.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {system.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">
            Advanced F&O Trading Platform
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Experience the power of automated F&O trading with our comprehensive system that combines 
            multiple portfolios, real-time signal management, and advanced risk management features. 
            Our platform ensures optimal execution with minimal risk exposure across all market conditions.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FOManagement;
