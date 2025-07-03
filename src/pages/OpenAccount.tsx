import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const OpenAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentExperience: '',
    riskTolerance: '',
    initialInvestment: '',
    investmentGoals: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [registrationId, setRegistrationId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setRegistrationId(result.registration_id);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          investmentExperience: '',
          riskTolerance: '',
          initialInvestment: '',
          investmentGoals: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Registration failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Open Your Account</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with Algonauts Technologies and let our AI-powered systems 
            manage your portfolio for optimal returns with controlled risk.
          </p>
        </div>

        {submitStatus === 'success' && (
          <Alert className="max-w-2xl mx-auto mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Registration submitted successfully! Your registration ID is #{registrationId}. 
              Our team will review your application and contact you within 24-48 hours.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert className="max-w-2xl mx-auto mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              There was an error submitting your registration. Please try again or contact support.
            </AlertDescription>
          </Alert>
        )}

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Account Information</CardTitle>
            <CardDescription>
              Please provide your details to get started with our automated trading platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="investmentExperience">Investment Experience</Label>
                <Input
                  id="investmentExperience"
                  name="investmentExperience"
                  type="text"
                  placeholder="e.g., Beginner, Intermediate, Advanced"
                  value={formData.investmentExperience}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                <Input
                  id="riskTolerance"
                  name="riskTolerance"
                  type="text"
                  placeholder="e.g., Conservative, Moderate, Aggressive"
                  value={formData.riskTolerance}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="initialInvestment">Initial Investment Amount</Label>
                <Input
                  id="initialInvestment"
                  name="initialInvestment"
                  type="number"
                  placeholder="Enter amount in USD"
                  value={formData.initialInvestment}
                  onChange={handleInputChange}
                  className="mt-1"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label htmlFor="investmentGoals">Investment Goals</Label>
                <Textarea
                  id="investmentGoals"
                  name="investmentGoals"
                  placeholder="Tell us about your investment objectives..."
                  value={formData.investmentGoals}
                  onChange={handleInputChange}
                  className="mt-1"
                  rows={4}
                  disabled={isLoading}
                />
              </div>

              <Button 
                type="button"
                onClick={handleSubmit}
                className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            By submitting this form, you agree to our terms of service and privacy policy.
            Our team will review your application and contact you within 24-48 hours.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OpenAccount;