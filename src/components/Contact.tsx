import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    initialInvestment: '',
    investmentGoals: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || 'Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          initialInvestment: '',
          investmentGoals: '',
        });
      } else {
        setMessage(result.detail || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('Unable to reach server. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">
                Let's Discuss Your Trading Strategy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to leverage algorithmic trading for superior returns? 
                Contact our team to explore how our proprietary systems can work for you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Consultation',
                  desc: 'Schedule a detailed consultation to understand your trading objectives and risk profile.',
                },
                {
                  title: 'Custom Solutions',
                  desc: 'Tailored algorithmic strategies designed specifically for your investment goals.',
                },
                {
                  title: 'Ongoing Support',
                  desc: 'Continuous monitoring and optimization of your trading algorithms for maximum performance.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-500 opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Amount</label>
                <Input
                  name="initialInvestment"
                  value={formData.initialInvestment}
                  onChange={handleChange}
                  placeholder="$100,000"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Goals</label>
                <Textarea
                  name="investmentGoals"
                  value={formData.investmentGoals}
                  onChange={handleChange}
                  placeholder="Tell us about your trading objectives..."
                  className="w-full h-32"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white hover:bg-gray-800 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {loading ? 'Submitting...' : 'Submit Inquiry'}
              </Button>

              {message && (
                <p className="text-center text-sm text-green-700 mt-2">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
