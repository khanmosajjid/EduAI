/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Sparkles, 
  Download, 
  MessageCircle, 
  HelpCircle, 
  DollarSign,
  Clock,
  Users,
  Star,
  BookOpen,
  Brain,
  Lightbulb,
  Database,
  Zap,
  CheckCircle,
  Calendar,
  Award,
  Target,
  Mail,
  Shield,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

interface CoursesPageProps {
  onBackToLanding: () => void;
  onGetStarted: () => void;
}

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  originalPrice?: number;
  image: string;
  icon: React.ComponentType<any>;
  rating: number;
  students: number;
  features: string[];
  curriculum: string[];
  category: string;
  skillsGained: string[];
}

export function CoursesPage({ onBackToLanding, onGetStarted }: CoursesPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [brochureForm, setBrochureForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    organization: '', 
    jobTitle: '',
    experience: '',
    hearAbout: ''
  });
  const [counselorForm, setCounselorForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    preferredTime: '',
    timezone: '',
    experience: '',
    goals: '',
    urgency: ''
  });
  const [enquiryForm, setEnquiryForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    subject: '',
    message: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Email verification states for each form
  const [counselorEmailVerification, setCounselorEmailVerification] = useState({
    otp: '',
    isOtpSent: false,
    isVerified: false,
    isVerifying: false,
    isSendingOtp: false
  });

  const [enquiryEmailVerification, setEnquiryEmailVerification] = useState({
    otp: '',
    isOtpSent: false,
    isVerified: false,
    isVerifying: false,
    isSendingOtp: false
  });

  const courses: Course[] = [
    {
      id: 1,
      title: 'AI for Non-Tech Professionals',
      description: 'Master AI tools and concepts without coding. Perfect for business professionals, marketers, designers, and entrepreneurs looking to leverage AI in their work.',
      instructor: 'Dr. Sarah Chen',
      duration: '8 weeks',
      level: 'Beginner',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1655891709782-15c1303a2a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzE3MzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Lightbulb,
      rating: 4.9,
      students: 2134,
      category: 'Business AI',
      features: [
        'Live interactive sessions with AI experts',
        'Hands-on projects with real AI tools',
        'Industry case studies and use cases',
        'Certificate of completion',
        'Lifetime access to course materials',
        '24/7 community support'
      ],
      curriculum: [
        'Introduction to AI and Its Impact',
        'AI Tools for Content Creation',
        'ChatGPT and Language Models',
        'AI for Data Analysis and Insights',
        'AI in Marketing and Sales',
        'AI for Project Management',
        'Building AI-Powered Workflows',
        'Future of AI in Business'
      ],
      skillsGained: [
        'AI Tool Mastery',
        'Prompt Engineering',
        'Workflow Automation',
        'Data-Driven Decision Making',
        'AI Strategy Development'
      ]
    }
    // ... other courses would be here
  ];

  const handleBrochureDownload = async (course: Course) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Create a simple brochure content
      const brochureContent = `
AVATAR AI - ${course.title}
Course Brochure

Instructor: ${course.instructor}
Duration: ${course.duration}
Level: ${course.level}
Price: $${course.price}

Course Description:
${course.description}

What You'll Learn:
${course.curriculum.map(item => `• ${item}`).join('\n')}

Skills You'll Gain:
${course.skillsGained.map(skill => `• ${skill}`).join('\n')}

Course Features:
${course.features.map(feature => `• ${feature}`).join('\n')}

For more information, visit our website or contact us.
Contact: info@avatarai.com
      `;

      // Create and download the file
      const blob = new Blob([brochureContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${course.title.replace(/\s+/g, '_')}_Brochure.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success('Brochure downloaded successfully!');
      resetForms();
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCounselorRequest = async () => {
    if (!counselorEmailVerification.isVerified) {
      toast.error('Please verify your email first');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Counselor meeting scheduled! You will receive a confirmation email shortly.');
      resetForms();
      setIsSubmitting(false);
    }, 1000);
  };

  const handleEnquirySubmit = async () => {
    if (!enquiryEmailVerification.isVerified) {
      toast.error('Please verify your email first');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Enquiry submitted successfully! We will respond within 24 hours.');
      resetForms();
      setIsSubmitting(false);
    }, 1000);
  };

  // Email verification functions
  const handleSendOtp = async (email: string, type: 'counselor' | 'enquiry') => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    const setVerification = type === 'counselor' ? setCounselorEmailVerification : setEnquiryEmailVerification;
    
    setVerification(prev => ({ ...prev, isSendingOtp: true }));
    
    // Simulate API call to send OTP
    setTimeout(() => {
      toast.success('Verification code sent to your email!');
      setVerification(prev => ({ 
        ...prev, 
        isOtpSent: true, 
        isSendingOtp: false 
      }));
    }, 1500);
  };

  const handleVerifyOtp = async (otp: string, type: 'counselor' | 'enquiry') => {
    if (!otp) {
      toast.error('Please enter the verification code');
      return;
    }

    if (otp.length !== 6) {
      toast.error('Verification code must be 6 digits');
      return;
    }

    const setVerification = type === 'counselor' ? setCounselorEmailVerification : setEnquiryEmailVerification;
    
    setVerification(prev => ({ ...prev, isVerifying: true }));
    
    // Simulate API call to verify OTP
    setTimeout(() => {
      // For demo purposes, accept any 6-digit OTP
      if (otp === '123456' || otp.length === 6) {
        toast.success('Email verified successfully!');
        setVerification(prev => ({ 
          ...prev, 
          isVerified: true, 
          isVerifying: false 
        }));
      } else {
        toast.error('Invalid verification code. Please try again.');
        setVerification(prev => ({ ...prev, isVerifying: false }));
      }
    }, 1500);
  };

  const resetForms = () => {
    setBrochureForm({ 
      name: '', 
      email: '', 
      phone: '', 
      organization: '', 
      jobTitle: '',
      experience: '',
      hearAbout: ''
    });
    setCounselorForm({ 
      name: '', 
      email: '', 
      phone: '', 
      preferredTime: '',
      timezone: '',
      experience: '',
      goals: '',
      urgency: ''
    });
    setEnquiryForm({ 
      name: '', 
      email: '', 
      phone: '',
      subject: '',
      message: '',
      urgency: ''
    });
    setCounselorEmailVerification({
      otp: '',
      isOtpSent: false,
      isVerified: false,
      isVerifying: false,
      isSendingOtp: false
    });
    setEnquiryEmailVerification({
      otp: '',
      isOtpSent: false,
      isVerified: false,
      isVerifying: false,
      isSendingOtp: false
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={onBackToLanding}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl text-white">Avatar AI</span>
            </div>
          </div>
          <Button 
            onClick={onGetStarted} 
            className="bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black border-0"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Transform Your Future with
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Mastery
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive AI courses designed by industry experts. From beginner-friendly introductions to advanced deep learning techniques.
          </p>
        </div>
      </section>

      {/* Sample Course Card with Improved Buttons */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-slate-800/50 border-slate-700 backdrop-blur overflow-hidden">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black">
                      {course.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <course.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl text-white mb-1">{course.title}</h3>
                        <p className="text-gray-400 text-sm">by {course.instructor}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm">{course.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl text-white">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-gray-500 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>

                  {/* Improved Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Download Brochure */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                          onClick={() => setSelectedCourse(course)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Brochure
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-white flex items-center space-x-2">
                            <Download className="h-5 w-5" />
                            <span>Download Course Brochure</span>
                          </DialogTitle>
                          <DialogDescription className="text-gray-300">
                            Get detailed information about {selectedCourse?.title} including curriculum, pricing, and career outcomes.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="brochure-name" className="text-white">Full Name *</Label>
                            <Input
                              id="brochure-name"
                              value={brochureForm.name}
                              onChange={(e) => setBrochureForm({ ...brochureForm, name: e.target.value })}
                              placeholder="Enter your full name"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="brochure-email" className="text-white">Email Address *</Label>
                            <Input
                              id="brochure-email"
                              type="email"
                              value={brochureForm.email}
                              onChange={(e) => setBrochureForm({ ...brochureForm, email: e.target.value })}
                              placeholder="Enter your email"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="brochure-phone" className="text-white">Phone Number *</Label>
                            <Input
                              id="brochure-phone"
                              value={brochureForm.phone}
                              onChange={(e) => setBrochureForm({ ...brochureForm, phone: e.target.value })}
                              placeholder="Enter your phone number"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="brochure-organization" className="text-white">Organization</Label>
                            <Input
                              id="brochure-organization"
                              value={brochureForm.organization}
                              onChange={(e) => setBrochureForm({ ...brochureForm, organization: e.target.value })}
                              placeholder="Company/Organization"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="brochure-jobTitle" className="text-white">Job Title</Label>
                            <Input
                              id="brochure-jobTitle"
                              value={brochureForm.jobTitle}
                              onChange={(e) => setBrochureForm({ ...brochureForm, jobTitle: e.target.value })}
                              placeholder="Your current role"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="brochure-experience" className="text-white">Experience Level</Label>
                            <Select value={brochureForm.experience} onValueChange={(value) => setBrochureForm({ ...brochureForm, experience: value })}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                                <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                                <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Label htmlFor="brochure-hearAbout" className="text-white">How did you hear about us?</Label>
                          <Select value={brochureForm.hearAbout} onValueChange={(value) => setBrochureForm({ ...brochureForm, hearAbout: value })}>
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-slate-600">
                              <SelectItem value="google">Google Search</SelectItem>
                              <SelectItem value="social">Social Media</SelectItem>
                              <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                              <SelectItem value="advertisement">Online Advertisement</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button 
                          onClick={() => selectedCourse && handleBrochureDownload(selectedCourse)}
                          disabled={!brochureForm.name || !brochureForm.email || !brochureForm.phone || isSubmitting}
                          className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black mt-6"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Preparing Download...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download Brochure
                            </>
                          )}
                        </Button>
                      </DialogContent>
                    </Dialog>

                    {/* Talk to Counselor - With Email Verification */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                          onClick={() => {
                            setSelectedCourse(course);
                            setCounselorEmailVerification({
                              otp: '',
                              isOtpSent: false,
                              isVerified: false,
                              isVerifying: false,
                              isSendingOtp: false
                            });
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Counselor
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-white flex items-center space-x-2">
                            <MessageCircle className="h-5 w-5" />
                            <span>Talk to a Counselor</span>
                          </DialogTitle>
                          <DialogDescription className="text-gray-300">
                            Schedule a free consultation about {selectedCourse?.title} with our education counselor.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="counselor-name" className="text-white">Full Name *</Label>
                              <Input
                                id="counselor-name"
                                value={counselorForm.name}
                                onChange={(e) => setCounselorForm({ ...counselorForm, name: e.target.value })}
                                placeholder="Enter your full name"
                                className="bg-slate-700 border-slate-600 text-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="counselor-email" className="text-white">Email Address *</Label>
                              <Input
                                id="counselor-email"
                                type="email"
                                value={counselorForm.email}
                                onChange={(e) => setCounselorForm({ ...counselorForm, email: e.target.value })}
                                placeholder="Enter your email"
                                className="bg-slate-700 border-slate-600 text-white"
                                disabled={counselorEmailVerification.isOtpSent}
                              />
                            </div>
                            <div>
                              <Label htmlFor="counselor-phone" className="text-white">Phone Number *</Label>
                              <Input
                                id="counselor-phone"
                                value={counselorForm.phone}
                                onChange={(e) => setCounselorForm({ ...counselorForm, phone: e.target.value })}
                                placeholder="Enter your phone number"
                                className="bg-slate-700 border-slate-600 text-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="counselor-timezone" className="text-white">Timezone</Label>
                              <Select value={counselorForm.timezone} onValueChange={(value) => setCounselorForm({ ...counselorForm, timezone: value })}>
                                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                  <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-700 border-slate-600">
                                  <SelectItem value="est">EST (Eastern)</SelectItem>
                                  <SelectItem value="cst">CST (Central)</SelectItem>
                                  <SelectItem value="mst">MST (Mountain)</SelectItem>
                                  <SelectItem value="pst">PST (Pacific)</SelectItem>
                                  <SelectItem value="utc">UTC</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="counselor-preferredTime" className="text-white">Preferred Time *</Label>
                            <Input
                              id="counselor-preferredTime"
                              value={counselorForm.preferredTime}
                              onChange={(e) => setCounselorForm({ ...counselorForm, preferredTime: e.target.value })}
                              placeholder="e.g., Weekdays 10 AM - 2 PM, or specific date/time"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>

                          <div>
                            <Label htmlFor="counselor-experience" className="text-white">Current Experience Level</Label>
                            <Select value={counselorForm.experience} onValueChange={(value) => setCounselorForm({ ...counselorForm, experience: value })}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select your experience" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                                <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="counselor-goals" className="text-white">Learning Goals</Label>
                            <Textarea
                              id="counselor-goals"
                              value={counselorForm.goals}
                              onChange={(e) => setCounselorForm({ ...counselorForm, goals: e.target.value })}
                              placeholder="Tell us about your learning objectives and career goals..."
                              className="bg-slate-700 border-slate-600 text-white min-h-[80px]"
                            />
                          </div>

                          <div>
                            <Label htmlFor="counselor-urgency" className="text-white">How soon do you want to start?</Label>
                            <Select value={counselorForm.urgency} onValueChange={(value) => setCounselorForm({ ...counselorForm, urgency: value })}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select timeframe" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="immediately">Immediately</SelectItem>
                                <SelectItem value="within-week">Within a week</SelectItem>
                                <SelectItem value="within-month">Within a month</SelectItem>
                                <SelectItem value="few-months">In a few months</SelectItem>
                                <SelectItem value="just-exploring">Just exploring</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Email Verification Section */}
                          {counselorForm.email && !counselorEmailVerification.isVerified && (
                            <div className="bg-blue-600/10 border border-blue-600/30 p-4 rounded-lg">
                              <h4 className="text-white mb-3 flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>Email Verification Required</span>
                              </h4>
                              
                              {!counselorEmailVerification.isOtpSent ? (
                                <div className="flex items-end space-x-2">
                                  <div className="flex-1">
                                    <Label className="text-blue-200">Email to verify: {counselorForm.email}</Label>
                                  </div>
                                  <Button 
                                    onClick={() => handleSendOtp(counselorForm.email, 'counselor')}
                                    disabled={counselorEmailVerification.isSendingOtp}
                                    className="bg-blue-600 hover:bg-blue-700"
                                  >
                                    {counselorEmailVerification.isSendingOtp ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      'Send Code'
                                    )}
                                  </Button>
                                </div>
                              ) : (
                                <div>
                                  <Label className="text-blue-200">Enter 6-digit verification code sent to {counselorForm.email}</Label>
                                  <div className="flex space-x-2 mt-2">
                                    <Input
                                      type="text"
                                      maxLength={6}
                                      value={counselorEmailVerification.otp}
                                      onChange={(e) => setCounselorEmailVerification(prev => ({ ...prev, otp: e.target.value.replace(/\D/g, '') }))}
                                      placeholder="Enter 6-digit code"
                                      className="bg-slate-600 border-slate-500 text-white"
                                    />
                                    <Button 
                                      onClick={() => handleVerifyOtp(counselorEmailVerification.otp, 'counselor')}
                                      disabled={counselorEmailVerification.isVerifying || counselorEmailVerification.otp.length !== 6}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      {counselorEmailVerification.isVerifying ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        'Verify'
                                      )}
                                    </Button>
                                  </div>
                                  <p className="text-xs text-blue-300 mt-2">
                                    Demo: Use code "123456" or any 6-digit number | 
                                    <button 
                                      onClick={() => handleSendOtp(counselorForm.email, 'counselor')}
                                      className="text-blue-400 hover:text-blue-300 ml-1 underline"
                                      disabled={counselorEmailVerification.isSendingOtp}
                                    >
                                      Resend Code
                                    </button>
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {counselorEmailVerification.isVerified && (
                            <div className="bg-green-600/20 border border-green-600/30 p-3 rounded-lg">
                              <div className="flex items-center space-x-2 text-green-400">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Email verified successfully!</span>
                              </div>
                            </div>
                          )}

                          <Button 
                            onClick={handleCounselorRequest}
                            disabled={!counselorForm.name || !counselorForm.email || !counselorForm.phone || !counselorForm.preferredTime || !counselorEmailVerification.isVerified || isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Scheduling Consultation...
                              </>
                            ) : (
                              <>
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Free Consultation
                              </>
                            )}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Course Enquiry - With Email Verification */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                          onClick={() => {
                            setSelectedCourse(course);
                            setEnquiryEmailVerification({
                              otp: '',
                              isOtpSent: false,
                              isVerified: false,
                              isVerifying: false,
                              isSendingOtp: false
                            });
                          }}
                        >
                          <HelpCircle className="h-4 w-4 mr-2" />
                          Enquiry
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-white flex items-center space-x-2">
                            <HelpCircle className="h-5 w-5" />
                            <span>Course Enquiry</span>
                          </DialogTitle>
                          <DialogDescription className="text-gray-300">
                            Have questions about {selectedCourse?.title}? Send us your enquiry and we'll get back to you promptly.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="enquiry-name" className="text-white">Full Name *</Label>
                              <Input
                                id="enquiry-name"
                                value={enquiryForm.name}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                                placeholder="Enter your full name"
                                className="bg-slate-700 border-slate-600 text-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="enquiry-email" className="text-white">Email Address *</Label>
                              <Input
                                id="enquiry-email"
                                type="email"
                                value={enquiryForm.email}
                                onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                                placeholder="Enter your email"
                                className="bg-slate-700 border-slate-600 text-white"
                                disabled={enquiryEmailVerification.isOtpSent}
                              />
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="enquiry-phone" className="text-white">Phone Number</Label>
                            <Input
                              id="enquiry-phone"
                              value={enquiryForm.phone}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                              placeholder="Enter your phone number (optional)"
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>

                          <div>
                            <Label htmlFor="enquiry-subject" className="text-white">Subject *</Label>
                            <Select value={enquiryForm.subject} onValueChange={(value) => setEnquiryForm({ ...enquiryForm, subject: value })}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select enquiry type" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="course-content">Course Content & Curriculum</SelectItem>
                                <SelectItem value="pricing-payment">Pricing & Payment Options</SelectItem>
                                <SelectItem value="schedule-timing">Schedule & Timing</SelectItem>
                                <SelectItem value="prerequisites">Prerequisites & Requirements</SelectItem>
                                <SelectItem value="certification">Certification & Career Support</SelectItem>
                                <SelectItem value="technical-support">Technical Support</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="enquiry-urgency" className="text-white">Response Priority</Label>
                            <Select value={enquiryForm.urgency} onValueChange={(value) => setEnquiryForm({ ...enquiryForm, urgency: value })}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="How urgent is your enquiry?" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="urgent">Urgent (within 24 hours)</SelectItem>
                                <SelectItem value="normal">Normal (2-3 days)</SelectItem>
                                <SelectItem value="low">Low priority (1 week)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="enquiry-message" className="text-white">Your Message *</Label>
                            <Textarea
                              id="enquiry-message"
                              value={enquiryForm.message}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                              placeholder="Please describe your questions or requirements in detail..."
                              className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                            />
                          </div>

                          {/* Email Verification Section */}
                          {enquiryForm.email && !enquiryEmailVerification.isVerified && (
                            <div className="bg-blue-600/10 border border-blue-600/30 p-4 rounded-lg">
                              <h4 className="text-white mb-3 flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>Email Verification Required</span>
                              </h4>
                              
                              {!enquiryEmailVerification.isOtpSent ? (
                                <div className="flex items-end space-x-2">
                                  <div className="flex-1">
                                    <Label className="text-blue-200">Email to verify: {enquiryForm.email}</Label>
                                  </div>
                                  <Button 
                                    onClick={() => handleSendOtp(enquiryForm.email, 'enquiry')}
                                    disabled={enquiryEmailVerification.isSendingOtp}
                                    className="bg-blue-600 hover:bg-blue-700"
                                  >
                                    {enquiryEmailVerification.isSendingOtp ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      'Send Code'
                                    )}
                                  </Button>
                                </div>
                              ) : (
                                <div>
                                  <Label className="text-blue-200">Enter 6-digit verification code sent to {enquiryForm.email}</Label>
                                  <div className="flex space-x-2 mt-2">
                                    <Input
                                      type="text"
                                      maxLength={6}
                                      value={enquiryEmailVerification.otp}
                                      onChange={(e) => setEnquiryEmailVerification(prev => ({ ...prev, otp: e.target.value.replace(/\D/g, '') }))}
                                      placeholder="Enter 6-digit code"
                                      className="bg-slate-600 border-slate-500 text-white"
                                    />
                                    <Button 
                                      onClick={() => handleVerifyOtp(enquiryEmailVerification.otp, 'enquiry')}
                                      disabled={enquiryEmailVerification.isVerifying || enquiryEmailVerification.otp.length !== 6}
                                      className="bg-green-600 hover:bg-green-700"
                                    >
                                      {enquiryEmailVerification.isVerifying ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        'Verify'
                                      )}
                                    </Button>
                                  </div>
                                  <p className="text-xs text-blue-300 mt-2">
                                    Demo: Use code "123456" or any 6-digit number | 
                                    <button 
                                      onClick={() => handleSendOtp(enquiryForm.email, 'enquiry')}
                                      className="text-blue-400 hover:text-blue-300 ml-1 underline"
                                      disabled={enquiryEmailVerification.isSendingOtp}
                                    >
                                      Resend Code
                                    </button>
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {enquiryEmailVerification.isVerified && (
                            <div className="bg-green-600/20 border border-green-600/30 p-3 rounded-lg">
                              <div className="flex items-center space-x-2 text-green-400">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">Email verified successfully!</span>
                              </div>
                            </div>
                          )}

                          <Button 
                            onClick={handleEnquirySubmit}
                            disabled={!enquiryForm.name || !enquiryForm.email || !enquiryForm.subject || !enquiryForm.message || !enquiryEmailVerification.isVerified || isSubmitting}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Sending Enquiry...
                              </>
                            ) : (
                              <>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Enquiry
                              </>
                            )}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* Course Fee Details */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                          onClick={() => setSelectedCourse(course)}
                        >
                          <DollarSign className="h-4 w-4 mr-2" />
                          Fee Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700">
                        <DialogHeader>
                          <DialogTitle className="text-white">Course Fee Breakdown</DialogTitle>
                          <DialogDescription className="text-gray-300">
                            Complete pricing details for {selectedCourse?.title}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-white">Course Fee</span>
                              <div className="text-right">
                                <span className="text-2xl text-white">${selectedCourse?.price}</span>
                                {selectedCourse?.originalPrice && (
                                  <div className="text-sm text-gray-400 line-through">
                                    ${selectedCourse.originalPrice}
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {selectedCourse?.originalPrice && (
                              <div className="bg-green-600/20 border border-green-600/30 p-3 rounded-lg mb-4">
                                <div className="flex items-center space-x-2 text-green-400">
                                  <CheckCircle className="h-4 w-4" />
                                  <span className="text-sm">
                                    Limited Time Offer: Save ${selectedCourse.originalPrice - selectedCourse.price}!
                                  </span>
                                </div>
                              </div>
                            )}

                            <div className="space-y-3 text-sm">
                              <div className="flex justify-between text-gray-300">
                                <span>Duration</span>
                                <span>{selectedCourse?.duration}</span>
                              </div>
                              <div className="flex justify-between text-gray-300">
                                <span>Level</span>
                                <span>{selectedCourse?.level}</span>
                              </div>
                              <div className="flex justify-between text-gray-300">
                                <span>Certificate</span>
                                <span>Included</span>
                              </div>
                              <div className="flex justify-between text-gray-300">
                                <span>Lifetime Access</span>
                                <span>Yes</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-white mb-3">What's Included:</h4>
                            <div className="space-y-2">
                              {selectedCourse?.features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-600">
                            <Button 
                              onClick={onGetStarted}
                              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black"
                            >
                              Enroll Now - ${selectedCourse?.price}
                            </Button>
                            <p className="text-xs text-gray-400 text-center mt-2">
                              30-day money-back guarantee
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}