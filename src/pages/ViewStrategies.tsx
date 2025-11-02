import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, ArrowRight, BarChart3, PieChart as PieChartIcon, Database, Activity, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NiftyPortfolioChart from '@/components/NiftyPortfolioChart';
import NiftyLongPortfolioChart from '@/components/NiftyLongPortfolioChart';

interface StrategyData {
  ticker: string | null;
  side: string;
  qty: number;
  entry_time: string;
  entry_price: number;
  exit_time: string | null;
  exit_price: number | null;
}

const ViewStrategies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMainStrategy, setShowMainStrategy] = useState(false);
  const [strategyData, setStrategyData] = useState<StrategyData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  // Real portfolio data from the client's cash management strategy
  const portfolioStocks = [
    { date: '09-05-2025', stock: 'SHRIPISTON', marketCap: 10897, entryPrice: 2100, currentPrice: 2485.1, dayChange: 3.39, investment: 40000, quantity: 19, investmentValue: 39900, marketValue: 47217, profitLoss: 7317, returnPct: 18.34 },
    { date: '09-05-2025', stock: 'KPRMILL', marketCap: 39035, entryPrice: 1150, currentPrice: 1142, dayChange: 2.24, investment: 40000, quantity: 34, investmentValue: 39100, marketValue: 38828, profitLoss: -272, returnPct: -0.70 },
    { date: '16-05-2025', stock: 'J&KBANK', marketCap: 12280, entryPrice: 104.51, currentPrice: 111.8, dayChange: 3.26, investment: 80000, quantity: 765, investmentValue: 79950, marketValue: 85527, profitLoss: 5577, returnPct: 6.98 },
    { date: '16-05-2025', stock: 'MOLDTKPAC', marketCap: 2267, entryPrice: 571.58, currentPrice: 682.1, dayChange: -0.97, investment: 80000, quantity: 139, investmentValue: 79450, marketValue: 94812, profitLoss: 15362, returnPct: 19.34 },
    { date: '23-05-2025', stock: 'MOREPENLAB', marketCap: 3444, entryPrice: 66.87, currentPrice: 62.86, dayChange: 0.88, investment: 80000, quantity: 1196, investmentValue: 79977, marketValue: 75181, profitLoss: -4796, returnPct: -6.00 },
    { date: '23-05-2025', stock: 'CCL', marketCap: 11377, entryPrice: 799.5, currentPrice: 852, dayChange: 1.72, investment: 80000, quantity: 100, investmentValue: 79950, marketValue: 85200, profitLoss: 5250, returnPct: 6.57 },
    { date: '30-05-2025', stock: 'SURYODAY', marketCap: 1481, entryPrice: 135.6, currentPrice: 139.07, dayChange: 1.30, investment: 80000, quantity: 589, investmentValue: 79868, marketValue: 81912, profitLoss: 2044, returnPct: 2.56 },
    { date: '30-05-2025', stock: 'ENDURANCE', marketCap: 37141, entryPrice: 2454.98, currentPrice: 2630.6, dayChange: 0.00, investment: 80000, quantity: 32, investmentValue: 78559, marketValue: 84179, profitLoss: 5620, returnPct: 7.15 },
    { date: '06-06-2025', stock: 'LTFOODS', marketCap: 16781, entryPrice: 470.85, currentPrice: 485, dayChange: 9.88, investment: 80000, quantity: 169, investmentValue: 79574, marketValue: 81965, profitLoss: 2391, returnPct: 3.01 },
    { date: '06-06-2025', stock: 'DODLA', marketCap: 8757, entryPrice: 1335.28, currentPrice: 1449.6, dayChange: 0.25, investment: 80000, quantity: 59, investmentValue: 78782, marketValue: 85526, profitLoss: 6745, returnPct: 8.56 },
    { date: '13-06-2025', stock: 'ABREL', marketCap: 26681, entryPrice: 2499, currentPrice: 2414, dayChange: 3.41, investment: 80000, quantity: 32, investmentValue: 79968, marketValue: 77248, profitLoss: -2720, returnPct: -3.40 },
    { date: '13-06-2025', stock: 'MANAPPURAM', marketCap: 23409, entryPrice: 283.35, currentPrice: 275, dayChange: 0.33, investment: 80000, quantity: 282, investmentValue: 79905, marketValue: 77550, profitLoss: -2355, returnPct: -2.95 },
    { date: '20-06-2025', stock: 'FORCEMOT', marketCap: 19089, entryPrice: 14249, currentPrice: 14525, dayChange: 2.92, investment: 80000, quantity: 5, investmentValue: 71245, marketValue: 72625, profitLoss: 1380, returnPct: 1.94 },
    { date: '20-06-2025', stock: 'EMIL', marketCap: 5694, entryPrice: 146.91, currentPrice: 147.98, dayChange: -0.26, investment: 80000, quantity: 544, investmentValue: 79919, marketValue: 80501, profitLoss: 582, returnPct: 0.73 },
    { date: '27-06-2025', stock: 'ITDCEM', marketCap: 15297, entryPrice: 887.7, currentPrice: 886.3, dayChange: 0.94, investment: 80000, quantity: 90, investmentValue: 79893, marketValue: 79767, profitLoss: -126, returnPct: -0.16 },
    { date: '27-06-2025', stock: 'USHAMART', marketCap: 10828, entryPrice: 358.1, currentPrice: 356.05, dayChange: 2.96, investment: 80000, quantity: 223, investmentValue: 79856, marketValue: 79399, profitLoss: -457, returnPct: -0.57 },
  ];

  // Filter functions
  const filterStocks = (filterType: string) => {
    switch (filterType) {
      case 'all':
        return portfolioStocks;
      case 'profitable':
        return portfolioStocks.filter(stock => stock.profitLoss > 0);
      case 'top-performers':
        return portfolioStocks
          .filter(stock => stock.returnPct >= 10)
          .sort((a, b) => b.returnPct - a.returnPct);
      case 'recent':
        return portfolioStocks.filter(stock => {
          const stockDate = new Date(stock.date.split('-').reverse().join('-'));
          const currentDate = new Date();
          const daysDiff = (currentDate.getTime() - stockDate.getTime()) / (1000 * 60 * 60 * 24);
          return daysDiff <= 14; // Last 14 days
        });
      default:
        return portfolioStocks;
    }
  };

  const filteredStocks = filterStocks(activeFilter);

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

  const fetchMainStrategy = async () => {
    setIsLoading(true);
    setError(null);
    setShowMainStrategy(false);
    
    try {
      const response = await fetch('https://qk37gu9jsd.execute-api.ap-south-1.amazonaws.com/prod/legacy-algo-website/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      
      if (result && result.data && Array.isArray(result.data)) {
        setStrategyData(result.data);
        setShowMainStrategy(true);
      } else {
        throw new Error('Invalid data format received from API');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load strategy data');
      setShowMainStrategy(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formatEntryTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
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
          
          <div className="flex justify-center">
            <Button 
              onClick={fetchMainStrategy}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Loading Strategy...
                </>
              ) : (
                <>
                  <Activity className="mr-2 h-5 w-5" />
                  View Main Strategy
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Strategy Modal */}
      <Dialog open={showMainStrategy} onOpenChange={setShowMainStrategy}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Main Strategy - Live Positions
            </DialogTitle>
            <DialogDescription className="text-base">
              Real-time algorithmic trading positions with entry details
            </DialogDescription>
          </DialogHeader>

          {error ? (
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to Load Strategy Data</h3>
                  <p className="text-sm text-red-700 mb-4">{error}</p>
                  
                  {error.includes('CORS') && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                      <h4 className="text-sm font-semibold text-yellow-800 mb-2">💡 Why is this happening?</h4>
                      <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                        <li>The API works in Postman but not in the browser due to CORS security</li>
                        <li>The API Gateway needs to be configured to allow browser requests</li>
                        <li>This is a server-side configuration issue, not a code problem</li>
                      </ul>
                      
                      <h4 className="text-sm font-semibold text-yellow-800 mt-3 mb-2">🔧 Solution for API Administrator:</h4>
                      <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                        <li>Go to AWS API Gateway console</li>
                        <li>Select the API: <code className="bg-yellow-100 px-1 rounded">legacy-algo-website</code></li>
                        <li>Enable CORS with these headers:
                          <ul className="ml-6 mt-1 space-y-1">
                            <li>• Access-Control-Allow-Origin: *</li>
                            <li>• Access-Control-Allow-Methods: GET, OPTIONS</li>
                            <li>• Access-Control-Allow-Headers: Content-Type</li>
                          </ul>
                        </li>
                        <li>Deploy the API after making changes</li>
                      </ol>
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={fetchMainStrategy}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Try Again
                    </Button>
                    {/* <Button 
                      onClick={() => window.open('https://qk37gu9jsd.execute-api.ap-south-1.amazonaws.com/prod/legacy-algo-website', '_blank')}
                      variant="outline"
                      className="border-red-300 text-red-700 hover:bg-red-50"
                    >
                      Open API Directly
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          ) : strategyData.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
              <Database className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold text-lg">No positions available</p>
              <p className="text-gray-500 text-sm mt-2">Strategy data will appear here when positions are active</p>
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Total Positions</p>
                    <p className="text-3xl font-bold text-blue-600">{strategyData.length}</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Buy Orders</p>
                    <p className="text-3xl font-bold text-green-600">
                      {strategyData.filter(d => d.side === 'buy').length}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-red-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Sell Orders</p>
                    <p className="text-3xl font-bold text-red-600">
                      {strategyData.filter(d => d.side === 'sell').length}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">Total Quantity</p>
                    <p className="text-3xl font-bold text-purple-600">
                      {strategyData.reduce((sum, d) => sum + d.qty, 0).toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Strategy Table */}
              <div className="border rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 py-5">
                  <h3 className="text-white font-bold text-xl flex items-center">
                    <Database className="mr-3 h-6 w-6" />
                    Live Trading Positions
                  </h3>
                  <p className="text-blue-200 text-sm mt-1">Real-time algorithmic execution data</p>
                </div>
                <div className="overflow-x-auto bg-gradient-to-b from-white to-gray-50">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">#</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Ticker</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Side</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Quantity</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Entry Price</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Entry Time</TableHead>
                        <TableHead className="font-bold text-gray-800 uppercase text-xs tracking-wider">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {strategyData.map((position, index) => (
                        <TableRow 
                          key={index}
                          className="hover:bg-blue-50 transition-all duration-200 border-b border-gray-100"
                        >
                          <TableCell className="font-bold text-gray-500">
                            {String(index + 1).padStart(2, '0')}
                          </TableCell>
                          <TableCell className="font-bold text-blue-700 text-base">
                            {position.ticker || <span className="text-gray-400 italic">Not Available</span>}
                          </TableCell>
                          <TableCell>
                            <span className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide shadow-sm ${
                              position.side === 'buy' 
                                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                                : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                            }`}>
                              {position.side}
                            </span>
                          </TableCell>
                          <TableCell className="font-bold text-gray-800 text-base">
                            {position.qty.toLocaleString()}
                          </TableCell>
                          <TableCell className="font-bold text-purple-700 text-base">
                            ₹{position.entry_price.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-sm text-gray-700 font-mono bg-gray-50 rounded">
                            {formatEntryTime(position.entry_time)}
                          </TableCell>
                          <TableCell>
                            <span className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide shadow-sm ${
                              position.exit_time 
                                ? 'bg-gray-300 text-gray-700' 
                                : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse'
                            }`}>
                              {position.exit_time ? 'CLOSED' : 'ACTIVE'}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <Activity className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-900 font-semibold mb-1">Real-Time Data Feed</p>
                    <p className="text-sm text-blue-800">
                      This data is fetched in real-time from our algorithmic trading system. 
                      Positions are updated dynamically based on market conditions and strategy signals.
                      Last updated: {new Date().toLocaleString('en-IN', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: '2-digit', 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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


            {/* Live Portfolio Holdings with Filters */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-purple-600" />
                  Current Portfolio Holdings
                </CardTitle>
                <CardDescription>
                  Real-time performance of our AI-selected stocks
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filter Buttons */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={activeFilter === 'all' ? 'default' : 'outline'}
                      onClick={() => setActiveFilter('all')}
                      className={`${
                        activeFilter === 'all'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      } transition-all duration-200`}
                    >
                      All Stocks
                    </Button>
                    <Button
                      variant={activeFilter === 'profitable' ? 'default' : 'outline'}
                      onClick={() => setActiveFilter('profitable')}
                      className={`${
                        activeFilter === 'profitable'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      } transition-all duration-200`}
                    >
                      Profitable
                    </Button>
                    <Button
                      variant={activeFilter === 'top-performers' ? 'default' : 'outline'}
                      onClick={() => setActiveFilter('top-performers')}
                      className={`${
                        activeFilter === 'top-performers'
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      } transition-all duration-200`}
                    >
                      Top Performers
                    </Button>
                    <Button
                      variant={activeFilter === 'recent' ? 'default' : 'outline'}
                      onClick={() => setActiveFilter('recent')}
                      className={`${
                        activeFilter === 'recent'
                          ? 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      } transition-all duration-200`}
                    >
                      Recent Picks
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>Entry Price</TableHead>
                        <TableHead>Current Price</TableHead>
                        <TableHead>Day % Change</TableHead>
                        <TableHead>Investment</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Investment Value</TableHead>
                        <TableHead>Market Value</TableHead>
                        <TableHead>Profit/Loss</TableHead>
                        <TableHead>Return (%)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStocks.map((stock, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{stock.date}</TableCell>
                          <TableCell className="font-semibold text-blue-600">{stock.stock}</TableCell>
                          <TableCell>{stock.marketCap.toLocaleString()}</TableCell>
                          <TableCell>₹{stock.entryPrice}</TableCell>
                          <TableCell>₹{stock.currentPrice}</TableCell>
                          <TableCell className={stock.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}>
                            {stock.dayChange >= 0 ? '+' : ''}{stock.dayChange}%
                          </TableCell>
                          <TableCell>₹{stock.investment.toLocaleString()}</TableCell>
                          <TableCell>{stock.quantity}</TableCell>
                          <TableCell>₹{stock.investmentValue.toLocaleString()}</TableCell>
                          <TableCell>₹{stock.marketValue.toLocaleString()}</TableCell>
                          <TableCell className={stock.profitLoss >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                            {stock.profitLoss >= 0 ? '+' : ''}₹{stock.profitLoss.toLocaleString()}
                          </TableCell>
                          <TableCell className={stock.returnPct >= 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                            {stock.returnPct >= 0 ? '+' : ''}{stock.returnPct}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                {/* Portfolio Summary */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Total Investment</p>
                      <p className="text-2xl font-bold text-blue-600">₹11,85,896</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Current Value</p>
                      <p className="text-2xl font-bold text-green-600">₹12,27,437</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total P&L</p>
                      <p className="text-2xl font-bold text-green-600">+₹41,542</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Overall Return</p>
                      <p className="text-2xl font-bold text-green-600">+3.87%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
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

            {/* Nifty Portfolio Chart */}
            <div className="mb-12">
              <NiftyPortfolioChart />
            </div>

            {/* Nifty Long Portfolio Chart */}
            <div className="mb-12">
              <NiftyLongPortfolioChart />
            </div>

            {/* F&O Performance Chart */}
            
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
