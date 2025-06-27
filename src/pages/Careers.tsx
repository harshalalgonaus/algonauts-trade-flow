import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 1,
      title: "Senior Algorithm Developer",
      department: "Tech",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Develop and optimize trading algorithms for equity and F&O markets. Work with cutting-edge technology to create automated trading systems.",
      requirements: ["Python/C++ proficiency", "Financial markets knowledge", "Machine Learning experience", "Algorithm optimization skills"]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Tech",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Manage infrastructure for high-frequency trading systems. Ensure 99.9% uptime for critical trading applications.",
      requirements: ["AWS/Azure experience", "Docker & Kubernetes", "CI/CD pipelines", "Monitoring & alerting systems"]
    },
    {
      id: 3,
      title: "Data Scientist",
      department: "Tech",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Analyze market data and develop predictive models for trading strategies. Work with large datasets to identify market patterns.",
      requirements: ["Python/R proficiency", "Statistical modeling", "Time series analysis", "Financial data experience"]
    },
    {
      id: 4,
      title: "Operations Manager",
      department: "Admin",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "6+ years",
      description: "Oversee daily operations and ensure compliance with regulatory requirements. Manage client relationships and operational processes.",
      requirements: ["Operations management", "Regulatory compliance", "Client relationship management", "Process optimization"]
    },
    {
      id: 5,
      title: "Compliance Officer",
      department: "Admin",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "4+ years",
      description: "Ensure adherence to SEBI regulations and internal policies. Monitor trading activities and maintain compliance documentation.",
      requirements: ["SEBI regulations knowledge", "Risk management", "Audit experience", "Legal documentation"]
    },
    {
      id: 6,
      title: "HR Business Partner",
      department: "HR",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      description: "Partner with leadership to drive HR strategy and talent management. Focus on employee engagement and organizational development.",
      requirements: ["HR strategy", "Talent acquisition", "Employee relations", "Performance management"]
    },
    {
      id: 7,
      title: "Talent Acquisition Specialist",
      department: "HR",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Source and recruit top talent for technical and non-technical roles. Build strong candidate pipelines for future hiring needs.",
      requirements: ["Technical recruiting", "Sourcing strategies", "Interview coordination", "Candidate assessment"]
    }
  ];

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Tech':
        return 'bg-blue-100 text-blue-800';
      case 'Admin':
        return 'bg-green-100 text-green-800';
      case 'HR':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const ApplicationForm = ({ position }) => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      currentCompany: '',
      expectedSalary: '',
      noticePeriod: '',
      coverLetter: '',
      resume: null,
      agreedToTerms: false
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Application submitted for:', position.title, formData);
      // Handle form submission here
    };

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="experience">Total Experience</Label>
            <Select onValueChange={(value) => handleInputChange('experience', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-8">5-8 years</SelectItem>
                <SelectItem value="8+">8+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="currentCompany">Current Company</Label>
            <Input
              id="currentCompany"
              value={formData.currentCompany}
              onChange={(e) => handleInputChange('currentCompany', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="expectedSalary">Expected Salary (LPA)</Label>
            <Input
              id="expectedSalary"
              value={formData.expectedSalary}
              onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="noticePeriod">Notice Period</Label>
          <Select onValueChange={(value) => handleInputChange('noticePeriod', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select notice period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate</SelectItem>
              <SelectItem value="15-days">15 days</SelectItem>
              <SelectItem value="1-month">1 month</SelectItem>
              <SelectItem value="2-months">2 months</SelectItem>
              <SelectItem value="3-months">3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="resume">Resume/CV *</Label>
          <Input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleInputChange('resume', e.target.files[0])}
            required
          />
        </div>

        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            placeholder="Tell us why you're interested in this position..."
            value={formData.coverLetter}
            onChange={(e) => handleInputChange('coverLetter', e.target.value)}
            rows={4}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked)}
          />
          <Label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions and privacy policy *
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-black text-white hover:bg-gray-800"
          disabled={!formData.agreedToTerms}
        >
          Submit Application
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future of algorithmic trading. Work with cutting-edge technology 
            and help shape the financial markets.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getDepartmentColor(position.department)}>
                      {position.department}
                    </Badge>
                    <span className="text-sm text-gray-500">{position.type}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {position.experience}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800"
                        onClick={() => setSelectedPosition(position)}
                      >
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Apply for {position.title}</DialogTitle>
                        <DialogDescription>
                          {position.department} • {position.location} • {position.type}
                        </DialogDescription>
                      </DialogHeader>
                      <ApplicationForm position={position} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Join Algonauts?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Culture</h3>
              <p className="text-gray-600">
                Work with cutting-edge technology and be part of innovations in algorithmic trading
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Package</h3>
              <p className="text-gray-600">
                Attractive salary packages with performance bonuses and equity participation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning opportunities and clear career progression paths
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
