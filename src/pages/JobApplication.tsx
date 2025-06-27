
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Upload } from 'lucide-react';
import { toast } from 'sonner';

const JobApplication = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const positionId = searchParams.get('position');
  const positionTitle = searchParams.get('title');
  const department = searchParams.get('department');
  const location = searchParams.get('location');

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // Address
    currentAddress: '',
    permanentAddress: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    
    // Professional Information
    currentCompany: '',
    currentDesignation: '',
    totalExperience: '',
    relevantExperience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    
    // Education
    highestQualification: '',
    university: '',
    graduationYear: '',
    percentage: '',
    additionalCertifications: '',
    
    // Skills & Languages
    technicalSkills: '',
    languages: [],
    
    // Work Authorization
    workAuthorization: '',
    visaStatus: '',
    
    // References
    reference1Name: '',
    reference1Company: '',
    reference1Phone: '',
    reference1Email: '',
    reference2Name: '',
    reference2Company: '',
    reference2Phone: '',
    reference2Email: '',
    
    // Additional Information
    coverLetter: '',
    portfolioUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    reasonForChange: '',
    availability: '',
    
    // Files
    resume: null,
    coverLetterFile: null,
    portfolio: null,
    
    // Agreements
    agreedToTerms: false,
    consentToProcess: false,
    marketingEmails: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      languages: checked 
        ? [...prev.languages, language]
        : prev.languages.filter(l => l !== language)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    toast.success('Application submitted successfully!');
    navigate('/careers');
  };

  if (!positionId || !positionTitle) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-black mb-4">Position Not Found</h1>
          <p className="text-gray-600 mb-8">The job position you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/careers')} className="bg-black text-white hover:bg-gray-800">
            Back to Careers
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/careers')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Button>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-black mb-2">Apply for {positionTitle}</h1>
            <p className="text-gray-600">{department} • {location}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleInputChange('gender', value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Information */}
          <Card>
            <CardHeader>
              <CardTitle>Address Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentAddress">Current Address *</Label>
                <Textarea
                  id="currentAddress"
                  value={formData.currentAddress}
                  onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                <Textarea
                  id="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                  <Label htmlFor="currentDesignation">Current Designation</Label>
                  <Input
                    id="currentDesignation"
                    value={formData.currentDesignation}
                    onChange={(e) => handleInputChange('currentDesignation', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="totalExperience">Total Experience *</Label>
                  <Select onValueChange={(value) => handleInputChange('totalExperience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-8">5-8 years</SelectItem>
                      <SelectItem value="8-10">8-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="relevantExperience">Relevant Experience</Label>
                  <Select onValueChange={(value) => handleInputChange('relevantExperience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select relevant experience" />
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

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="currentSalary">Current Salary (LPA)</Label>
                  <Input
                    id="currentSalary"
                    value={formData.currentSalary}
                    onChange={(e) => handleInputChange('currentSalary', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="expectedSalary">Expected Salary (LPA) *</Label>
                  <Input
                    id="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="noticePeriod">Notice Period *</Label>
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
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="highestQualification">Highest Qualification *</Label>
                  <Select onValueChange={(value) => handleInputChange('highestQualification', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="university">University/Institution *</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="graduationYear">Graduation Year *</Label>
                  <Input
                    id="graduationYear"
                    type="number"
                    min="1980"
                    max="2030"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="percentage">Percentage/CGPA *</Label>
                  <Input
                    id="percentage"
                    value={formData.percentage}
                    onChange={(e) => handleInputChange('percentage', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalCertifications">Additional Certifications</Label>
                <Textarea
                  id="additionalCertifications"
                  placeholder="List any relevant certifications, courses, or training..."
                  value={formData.additionalCertifications}
                  onChange={(e) => handleInputChange('additionalCertifications', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="technicalSkills">Technical Skills *</Label>
                <Textarea
                  id="technicalSkills"
                  placeholder="List your technical skills, programming languages, tools, etc..."
                  value={formData.technicalSkills}
                  onChange={(e) => handleInputChange('technicalSkills', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label>Languages Known</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {['English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu', 'Bengali', 'Kannada', 'Malayalam'].map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                        id={lang}
                        checked={formData.languages.includes(lang)}
                        onCheckedChange={(checked) => handleLanguageChange(lang, checked as boolean)}
                      />
                      <Label htmlFor={lang}>{lang}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Authorization */}
          <Card>
            <CardHeader>
              <CardTitle>Work Authorization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Are you authorized to work in India? *</Label>
                <RadioGroup
                  value={formData.workAuthorization}
                  onValueChange={(value) => handleInputChange('workAuthorization', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="auth-yes" />
                    <Label htmlFor="auth-yes">Yes, I am authorized to work in India</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="auth-no" />
                    <Label htmlFor="auth-no">No, I will require sponsorship</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="visaStatus">Current Visa Status (if applicable)</Label>
                <Input
                  id="visaStatus"
                  value={formData.visaStatus}
                  onChange={(e) => handleInputChange('visaStatus', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* References */}
          <Card>
            <CardHeader>
              <CardTitle>Professional References</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4">Reference 1</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reference1Name">Name</Label>
                    <Input
                      id="reference1Name"
                      value={formData.reference1Name}
                      onChange={(e) => handleInputChange('reference1Name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference1Company">Company</Label>
                    <Input
                      id="reference1Company"
                      value={formData.reference1Company}
                      onChange={(e) => handleInputChange('reference1Company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference1Phone">Phone</Label>
                    <Input
                      id="reference1Phone"
                      value={formData.reference1Phone}
                      onChange={(e) => handleInputChange('reference1Phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference1Email">Email</Label>
                    <Input
                      id="reference1Email"
                      type="email"
                      value={formData.reference1Email}
                      onChange={(e) => handleInputChange('reference1Email', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Reference 2</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reference2Name">Name</Label>
                    <Input
                      id="reference2Name"
                      value={formData.reference2Name}
                      onChange={(e) => handleInputChange('reference2Name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference2Company">Company</Label>
                    <Input
                      id="reference2Company"
                      value={formData.reference2Company}
                      onChange={(e) => handleInputChange('reference2Company', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference2Phone">Phone</Label>
                    <Input
                      id="reference2Phone"
                      value={formData.reference2Phone}
                      onChange={(e) => handleInputChange('reference2Phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="reference2Email">Email</Label>
                    <Input
                      id="reference2Email"
                      type="email"
                      value={formData.reference2Email}
                      onChange={(e) => handleInputChange('reference2Email', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                  <Input
                    id="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                  <Input
                    id="linkedinUrl"
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="githubUrl">GitHub Profile</Label>
                  <Input
                    id="githubUrl"
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reasonForChange">Reason for Job Change</Label>
                <Textarea
                  id="reasonForChange"
                  placeholder="What motivates you to look for a new opportunity?"
                  value={formData.reasonForChange}
                  onChange={(e) => handleInputChange('reasonForChange', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="availability">When can you start?</Label>
                <Input
                  id="availability"
                  type="date"
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* File Uploads */}
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="resume">Resume/CV *</Label>
                <div className="mt-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleInputChange('resume', e.target.files?.[0])}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div>
                <Label htmlFor="coverLetterFile">Cover Letter (Optional)</Label>
                <div className="mt-2">
                  <Input
                    id="coverLetterFile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleInputChange('coverLetterFile', e.target.files?.[0])}
                  />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio/Work Samples (Optional)</Label>
                <div className="mt-2">
                  <Input
                    id="portfolio"
                    type="file"
                    accept=".pdf,.zip,.rar"
                    onChange={(e) => handleInputChange('portfolio', e.target.files?.[0])}
                  />
                  <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, ZIP, RAR (Max 10MB)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreements */}
          <Card>
            <CardHeader>
              <CardTitle>Agreements & Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I agree to the terms and conditions and privacy policy. I understand that the information provided will be used for recruitment purposes. *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consentToProcess}
                  onCheckedChange={(checked) => handleInputChange('consentToProcess', checked)}
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed">
                  I consent to the processing of my personal data for recruitment and employment purposes. *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.marketingEmails}
                  onCheckedChange={(checked) => handleInputChange('marketingEmails', checked)}
                />
                <Label htmlFor="marketing" className="text-sm leading-relaxed">
                  I would like to receive updates about job opportunities and company news via email.
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/careers')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-black text-white hover:bg-gray-800"
              disabled={!formData.agreedToTerms || !formData.consentToProcess}
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default JobApplication;
