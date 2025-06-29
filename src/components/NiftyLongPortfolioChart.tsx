
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const NiftyLongPortfolioChart = () => {
  const data = [
    { time: '09:47', value: 156820.25, action: 'Buy Portfolio' },
    { time: '09:50', value: 174680.25, action: null },
    { time: '09:51', value: 174680.25, action: null },
    { time: '09:54', value: 534040.7, action: null },
    { time: '09:59', value: 575596.15, action: null },
    { time: '10:09', value: 533327.7, action: null },
    { time: '10:29', value: 511895.05, action: null },
    { time: '10:34', value: 454210.15, action: null },
    { time: '10:39', value: 444596.35, action: null },
    { time: '10:49', value: 347185.6, action: null },
    { time: '11:14', value: 363071.8, action: null },
    { time: '11:44', value: 316523.9, action: null },
    { time: '11:49', value: 351783.15, action: null },
    { time: '11:59', value: 338356.9, action: null },
    { time: '12:09', value: 398414.25, action: null },
    { time: '12:14', value: 387446.4, action: null },
    { time: '12:29', value: 435749.25, action: null },
    { time: '12:34', value: 440082.5, action: null },
    { time: '12:39', value: 452414.65, action: null },
    { time: '12:44', value: 443248.15, action: null },
    { time: '12:59', value: 441521.0, action: null },
    { time: '13:04', value: 472474.25, action: null },
    { time: '13:09', value: 474597.5, action: null },
    { time: '13:14', value: 477574.85, action: null },
    { time: '13:19', value: 520088.3, action: null },
    { time: '13:24', value: 536233.75, action: null },
    { time: '13:44', value: 544608.8, action: null },
    { time: '13:49', value: 597198.15, action: null },
    { time: '13:54', value: 629412.3, action: null },
    { time: '13:59', value: 650020.25, action: null },
    { time: '14:04', value: 681879.25, action: null },
    { time: '14:14', value: 667663.4, action: null },
    { time: '14:19', value: 688459.55, action: null },
    { time: '14:24', value: 687953.95, action: null },
    { time: '14:29', value: 709262.0, action: null },
    { time: '14:34', value: 735413.35, action: null },
    { time: '14:52', value: 756388.5, action: null },
    { time: '14:54', value: 750302.5, action: null },
    { time: '14:59', value: 836835.5, action: null },
    { time: '15:04', value: 841558.6, action: null },
    { time: '15:09', value: 819862.35, action: 'End of Day' }
  ];

  // Identify peaks and dips
  const values = data.map(d => d.value);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const maxIndex = values.indexOf(maxValue);
  const minIndex = values.indexOf(minValue);

  // Find significant local peaks and dips
  const findLocalExtremes = () => {
    const extremes = [];
    for (let i = 1; i < data.length - 1; i++) {
      const current = data[i].value;
      const prev = data[i - 1].value;
      const next = data[i + 1].value;
      
      // Local peak
      if (current > prev && current > next && current > 550000) {
        extremes.push({ index: i, type: 'peak', value: current, time: data[i].time });
      }
      // Local dip
      if (current < prev && current < next && current < 400000) {
        extremes.push({ index: i, type: 'dip', value: current, time: data[i].time });
      }
    }
    return extremes;
  };

  const localExtremes = findLocalExtremes();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`Time: ${label}`}</p>
          <p className="text-blue-600">{`Portfolio Value: ₹${payload[0].value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`}</p>
          {dataPoint.action && (
            <p className="text-green-600 font-medium">{`Action: ${dataPoint.action}`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload, index } = props;
    
    // Mark absolute peak and dip
    if (index === maxIndex) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={7} fill="#16a34a" stroke="#fff" strokeWidth={2} />
          <text x={cx} y={cy - 20} textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="bold">
            PEAK
          </text>
          <text x={cx} y={cy - 8} textAnchor="middle" fontSize="9" fill="#16a34a">
            ₹8.42L
          </text>
        </g>
      );
    }
    if (index === minIndex) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={7} fill="#dc2626" stroke="#fff" strokeWidth={2} />
          <text x={cx+12} y={cy - 20} textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="bold">
            LOWEST DIP
          </text>
          <text x={cx+20} y={cy - 8} textAnchor="middle" fontSize="9" fill="#dc2626">
            ₹1.57L
          </text>
        </g>
      );
    }
    
    // Mark significant local extremes
    const extreme = localExtremes.find(e => e.index === index);
    if (extreme) {
      const color = extreme.type === 'peak' ? '#f59e0b' : '#10b981';
      return (
        <g>
          <circle cx={cx} cy={cy} r={5} fill={color} stroke="#fff" strokeWidth={1} />
          <text x={cx} y={extreme.type === 'peak' ? cy - 12 : cy + 18} textAnchor="middle" fontSize="8" fill={color} fontWeight="bold">
            {extreme.type === 'peak' ? '↑' : '↓'}
          </text>
        </g>
      );
    }
    
    // Trading action dots
    if (payload.action) {
      let color = '#22c55e'; // green for buy
      if (payload.action === 'End of Day') color = '#f59e0b'; // amber for end
      
      return <circle cx={cx} cy={cy} r={4} fill={color} stroke="#fff" strokeWidth={2} />;
    }
    return null;
  };

  return (
    <div className="w-full h-full p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Nifty Long Portfolio Value - June 26, 2025</h2>
        <p className="text-gray-600 mb-6">Long position portfolio tracking with market movements analysis</p>
        
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 40, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="time" 
                stroke="#6b7280"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={2}
                fontSize={11}
              />
              <YAxis 
                stroke="#6b7280"
                tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`}
                domain={['dataMin - 20000', 'dataMax + 20000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={2}
                name="Long Portfolio Value (₹)"
                dot={<CustomDot />}
                activeDot={{ r: 6, fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
            <span>Absolute Peak</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <span>Absolute Dip</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span>Local Peak ↑</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span>Local Dip ↓</span>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm bg-gray-50 p-4 rounded">
          <div>
            <span className="font-semibold text-gray-700">Opening Value:</span>
            <p className="text-lg font-bold text-blue-600">₹1,56,820</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Closing Value:</span>
            <p className="text-lg font-bold text-blue-600">₹8,19,862</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Absolute Peak:</span>
            <p className="text-lg font-bold text-red-600">₹8,41,559 (15:04)</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Lowest Dip:</span>
            <p className="text-lg font-bold text-green-600">₹1,56,820 (09:47)</p>
          </div>
        </div>
        
        <div className="mt-4 bg-green-50 p-4 rounded">
          <h3 className="font-semibold text-green-800 mb-2">Key Market Movements & Analysis:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-medium">🚀 Explosive Start:</span> 09:47 to 09:59 (+₹4.19L in 12 mins)</p>
              <p><span className="font-medium">📉 Morning Correction:</span> 09:59 to 10:49 (-₹2.28L drop)</p>
              <p><span className="font-medium">💪 Afternoon Rally:</span> 13:19 to 15:04 (+₹3.21L surge)</p>
            </div>
            <div>
              <p><span className="font-medium">📊 Volatility Range:</span> ₹6.85L total swing</p>
              <p><span className="font-medium">🎯 Net Performance:</span> +₹6.63L (+422.8%)</p>
              <p><span className="font-medium">⏰ Trading Duration:</span> 5h 22min active session</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded">
          <h3 className="font-semibold text-blue-800 mb-2">Trading Session Phases:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border-l-4 border-green-500">
              <h4 className="font-medium text-green-700">Morning Surge (09:47-09:59)</h4>
              <p>Immediate 267% gain after buy signal</p>
              <p className="text-xs text-gray-600">Peak: ₹5.76L at 09:59</p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-red-500">
              <h4 className="font-medium text-red-700">Midday Consolidation (10:00-13:00)</h4>
              <p>Sideways movement with dips to ₹3.17L</p>
              <p className="text-xs text-gray-600">Range: ₹3.17L - ₹4.77L</p>
            </div>
            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
              <h4 className="font-medium text-blue-700">Final Rally (13:00-15:09)</h4>
              <p>Strong uptrend to session highs</p>
              <p className="text-xs text-gray-600">Peak: ₹8.42L at 15:04</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NiftyLongPortfolioChart;
