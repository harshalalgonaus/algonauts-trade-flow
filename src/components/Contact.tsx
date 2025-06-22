
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
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
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Consultation</h3>
                  <p className="text-gray-600">
                    Schedule a detailed consultation to understand your trading objectives and risk profile.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    Tailored algorithmic strategies designed specifically for your investment goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Continuous monitoring and optimization of your trading algorithms for maximum performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="john@example.com" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount
                </label>
                <Input placeholder="$100,000" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your trading objectives and experience..."
                  className="w-full h-32"
                />
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800 py-3">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
