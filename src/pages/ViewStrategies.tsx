
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, ArrowRight, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ViewStrategies = () => {
  // Sample data for cash management performance
  const cashManagementData = [
    { month: 'Jan', returns: 8.5, benchmark: 6.2 },
    { month: 'Feb', returns: 12.3, benchmark: 7.1 },
    { month: 'Mar', returns: 9.8, benchmark: 5.9 },
    { month: 'Apr', returns: 15.2, benchmark: 8.3 },
    { month: 'May', returns: 11.7, benchmark: 6.8 },
    { month: 'Jun', returns: 13.9, benchmark: 7.5 },
  ];

  // Sample data for F&O management performance
  const foManagementData = [
    { month: 'Jan', profit: 18.5, loss: -3.2 },
    { month: 'Feb', profit: 22.8, loss: -2.1 },
    { month: 'Mar', profit: 16.4, loss: -4.3 },
    { month: 'Apr', profit: 28.9, loss: -1.8 },
    { month: 'May', profit: 20.7, loss: -3.9 },
    { month: 'Jun', profit: 25.3, loss: -2.7 },
  ];

  // Portfolio allocation data
  const portfolioAllocation = [
    { name: 'Large Cap', value: 40, color: '#0088FE' },
    { name: 'Mid Cap', value: 30, color: '#00C49F' },
    { name: 'Small Cap', value: 20, color: '#FFBB28' },
    { name: 'Cash', value: 10, color: '#FF8042' },
  ];

  const chartConfig = {
    returns: {
      label: "Returns (%)",
      color: "#2563eb",
    },
    benchmark: {
      label: "Benchmark (%)",
      color: "#60a5fa",
    },
    profit: {
      label: "Profit (%)",
      color: "#16a34a",
    },
    loss: {
      label: "Loss (%)",
      color: "#dc2626",
    },
  };

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
            View Strategies
            <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4">
              Performance Analytics & Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Explore our proven trading strategies with detailed performance metrics, analytics, 
            and comprehensive insights into our cash management and F&O trading systems.
          </p>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Strategy Performance Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven results showcasing the effectiveness of our algorithmic trading strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-600">85.7%</CardTitle>
                <CardDescription>Success Rate</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">18.5%</CardTitle>
                <CardDescription>Average Annual Returns</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-600">0.23</CardTitle>
                <CardDescription>Sharpe Ratio</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Cash Management Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-12 w-12 text-blue-600 mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Cash Management Strategy
              </h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Our automated equity trading system delivers consistent returns through intelligent portfolio curation and market phase detection.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                    Monthly Performance vs Benchmark
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <LineChart data={cashManagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="returns" stroke="var(--color-returns)" strokeWidth={3} />
                      <Line type="monotone" dataKey="benchmark" stroke="var(--color-benchmark)" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Portfolio Allocation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChartIcon className="h-5 w-5 mr-2 text-green-600" />
                    Portfolio Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={portfolioAllocation}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {portfolioAllocation.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Price Action Curator</CardTitle>
                  <CardDescription>Advanced technical analysis for stock selection</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Market Phase Detection</CardTitle>
                  <CardDescription>Real-time market condition assessment</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Targeted Execution</CardTitle>
                  <CardDescription>Individual stock trading algorithms</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* F&O Management Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Target className="h-12 w-12 text-purple-600 mr-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                F&O Management Strategy
              </h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Advanced F&O trading system with diversified portfolios, real-time signal management, and automated execution.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* F&O Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                    Monthly Profit/Loss Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <BarChart data={foManagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="profit" fill="var(--color-profit)" />
                      <Bar dataKey="loss" fill="var(--color-loss)" />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Risk Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Risk Management Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maximum Drawdown</span>
                    <span className="font-semibold text-red-600">-4.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Win Rate</span>
                    <span className="font-semibold text-green-600">78.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Risk-Reward Ratio</span>
                    <span className="font-semibold text-blue-600">1:2.8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Trade Duration</span>
                    <span className="font-semibold">2.3 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Volatility</span>
                    <span className="font-semibold">12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Beta</span>
                    <span className="font-semibold">0.87</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* F&O Key Features */}
            <div className="mt-12 grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Dynamic Portfolio</CardTitle>
                  <CardDescription>Multiple portfolios based on risk profile</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Daily Builder</CardTitle>
                  <CardDescription>Mini portfolios created daily</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Signal Management</CardTitle>
                  <CardDescription>Real-time long/short signals</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Auto Execution</CardTitle>
                  <CardDescription>5-second trade execution</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to Experience Our Strategies?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Join thousands of traders who trust our proven algorithmic strategies. 
            Start your journey with our data-driven approach to trading success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/open-account">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                Open Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/services">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg group transition-all duration-300 hover:scale-105">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViewStrategies;
