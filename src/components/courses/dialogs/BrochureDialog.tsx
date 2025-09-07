import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Download, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  price: number;
  curriculum: string[];
  skillsGained: string[];
  features: string[];
}

interface BrochureDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureDialog({ course, isOpen, onClose }: BrochureDialogProps) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    organization: '', 
    jobTitle: '',
    experience: '',
    hearAbout: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = async () => {
    if (!course) return;
    
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
      resetForm();
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const resetForm = () => {
    setForm({ 
      name: '', 
      email: '', 
      phone: '', 
      organization: '', 
      jobTitle: '',
      experience: '',
      hearAbout: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Download Course Brochure</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Get detailed information about {course?.title} including curriculum, pricing, and career outcomes.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="brochure-name" className="text-white">Full Name *</Label>
            <Input
              id="brochure-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your full name"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="brochure-email" className="text-white">Email Address *</Label>
            <Input
              id="brochure-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="brochure-phone" className="text-white">Phone Number *</Label>
            <Input
              id="brochure-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Enter your phone number"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="brochure-organization" className="text-white">Organization</Label>
            <Input
              id="brochure-organization"
              value={form.organization}
              onChange={(e) => setForm({ ...form, organization: e.target.value })}
              placeholder="Company/Organization"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="brochure-jobTitle" className="text-white">Job Title</Label>
            <Input
              id="brochure-jobTitle"
              value={form.jobTitle}
              onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
              placeholder="Your current role"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          <div>
            <Label htmlFor="brochure-experience" className="text-white">Experience Level</Label>
            <Select value={form.experience} onValueChange={(value) => setForm({ ...form, experience: value })}>
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
          <Select value={form.hearAbout} onValueChange={(value) => setForm({ ...form, hearAbout: value })}>
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
          onClick={handleDownload}
          disabled={!form.name || !form.email || !form.phone || isSubmitting}
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
  );
}