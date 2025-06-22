
export const Services = () => {
  const services = [
    {
      title: "Algorithmic Trading Strategies",
      description: "Custom-built trading algorithms designed to identify and capitalize on market opportunities with precision and speed.",
      features: ["High-frequency trading", "Momentum strategies", "Mean reversion algorithms", "Cross-asset arbitrage"]
    },
    {
      title: "Seamless Execution",
      description: "Advanced execution technology ensuring minimal slippage and optimal trade timing across multiple markets.",
      features: ["Low-latency infrastructure", "Smart order routing", "Risk-adjusted execution", "Real-time monitoring"]
    },
    {
      title: "Statistical Analysis",
      description: "Deep market analysis using advanced statistical and mathematical models to generate superior returns.",
      features: ["Quantitative research", "Backtesting frameworks", "Performance analytics", "Risk assessment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Trading Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We identify, evaluate, analyze and leverage trading opportunities to build sophisticated 
            algorithms using cutting-edge statistical and mathematical models.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-gray-300 group opacity-0 animate-[fade-in_0.8s_ease-out_forwards] cursor-pointer"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 0.1}s` }}>
                    <div className="w-1.5 h-1.5 bg-black rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
