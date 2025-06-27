import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();

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

  const handleApplyNow = (position: any) => {
    const params = new URLSearchParams({
      position: position.id.toString(),
      title: position.title,
      department: position.department,
      location: position.location
    });
    navigate(`/job-application?${params.toString()}`);
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

                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={() => handleApplyNow(position)}
                  >
                    Apply Now
                  </Button>
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
