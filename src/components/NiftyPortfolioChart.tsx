
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const NiftyPortfolioChart = () => {
  const data = [
    { time: '10:02', value: 159056.4, action: 'Sell Portfolio' },
    { time: '10:17', value: 203720.1, action: null },
    { time: '10:19', value: 160662.8, action: null },
    { time: '10:32', value: 178183.9, action: null },
    { time: '10:45', value: 138861.8, action: null },
    { time: '10:47', value: 149432.7, action: 'Buy Portfolio' },
    { time: '10:49', value: 180132.2, action: null },
    { time: '10:55', value: 188371.3, action: null },
    { time: '10:59', value: 177035.2, action: null },
    { time: '11:02', value: 166665.3, action: 'Sell Portfolio' },
    { time: '11:15', value: 188367.0, action: null },
    { time: '11:18', value: 186864.5, action: null },
    { time: '11:32', value: 162851.8, action: null },
    { time: '11:47', value: 152536.1, action: null },
    { time: '12:17', value: 254048.8, action: null },
    { time: '12:47', value: 313558.3, action: null },
    { time: '13:02', value: 341548.1, action: null },
    { time: '13:20', value: 311968.1, action: null },
    { time: '13:25', value: 323466.5, action: null },
    { time: '13:32', value: 308011.2, action: null },
    { time: '13:47', value: 287951.2, action: null },
    { time: '14:02', value: 288295.5, action: null },
    { time: '14:17', value: 265240.7, action: null },
    { time: '14:34', value: 283916.5, action: null },
    { time: '14:39', value: 320657.2, action: null },
    { time: '14:52', value: 307460.4, action: null },
    { time: '15:04', value: 321505.1, action: null },
    { time: '15:09', value: 307863.6, action: 'End of Day' }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`Time: ${label}`}</p>
          <p className="text-blue-600">{`Portfolio Value: ₹${payload[0].value.toLocaleString('en-IN', { maximumFractionDigits: 1 })}`}</p>
          {data.action && (
            <p className="text-red-600 font-medium">{`Action: ${data.action}`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  // Identify peaks and dips
  const values = data.map(d => d.value);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const maxIndex = values.indexOf(maxValue);
  const minIndex = values.indexOf(minValue);

  const CustomDot = (props: any) => {
    const { cx, cy, payload, index } = props;
    
    // Mark peaks and dips
    if (index === maxIndex) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={6} fill="#16a34a" stroke="#fff" strokeWidth={2} />
          <text x={cx} y={cy - 15} textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">
            PEAK
          </text>
        </g>
      );
    }
    if (index === minIndex) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={6} fill="#dc2626" stroke="#fff" strokeWidth={2} />
          <text x={cx} y={cy - 25} textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">
            DIP
          </text>
        </g>
      );
    }
    
    // Trading action dots
    if (payload.action) {
      let color = '#ef4444'; // red for sell
      if (payload.action === 'Buy Portfolio') color = '#22c55e'; // green for buy
      if (payload.action === 'End of Day') color = '#f59e0b'; // amber for end
      
      return <circle cx={cx} cy={cy} r={4} fill={color} stroke="#fff" strokeWidth={2} />;
    }
    return null;
  };

  return (
    <div className="w-full h-full p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Nifty Portfolio Value - June 17, 2025</h2>
        <p className="text-gray-600 mb-6">Real-time portfolio value tracking with trading actions</p>
        
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="time" 
                stroke="#6b7280"
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`}
                domain={['dataMin - 10000', 'dataMax + 10000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={2}
                name="Portfolio Value (₹)"
                dot={<CustomDot />}
                activeDot={{ r: 6, fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Sell Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Buy Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span>End of Day</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <span>Peak Value</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <span>Lowest Dip</span>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded">
          <div>
            <span className="font-semibold text-gray-700">Opening Value:</span>
            <p className="text-lg font-bold text-blue-600">₹1,59,056</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Closing Value:</span>
            <p className="text-lg font-bold text-blue-600">₹3,07,864</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Peak Value:</span>
            <p className="text-lg font-bold text-red-600">₹3,41,548 (13:02)</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Lowest Dip:</span>
            <p className="text-lg font-bold text-green-600">₹1,38,862 (10:45)</p>
          </div>
        </div>
        
        <div className="mt-4 bg-blue-50 p-4 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">Key Market Movements:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-medium">📈 Major Rally:</span> 12:17 to 13:02 (+₹87K in 45 mins)</p>
              <p><span className="font-medium">📉 Sharp Drop:</span> 10:17 to 10:45 (-₹65K in 28 mins)</p>
            </div>
            <div>
              <p><span className="font-medium">🎯 Peak-to-Trough:</span> ₹2,02,686 swing range</p>
              <p><span className="font-medium">💰 Net Gain:</span> +₹1,48,808 (+93.5%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NiftyPortfolioChart;
