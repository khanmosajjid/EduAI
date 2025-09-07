import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { HelpCircle, Mail, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useEmailVerification } from "../../../contexts/EmailVerificationContext";

interface Course {
  id: number;
  title: string;
}

interface EnquiryDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryDialog({ course, isOpen, onClose }: EnquiryDialogProps) {
  const { isEmailVerified, verifyEmail } = useEmailVerification();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "",
  });
  const [emailVerification, setEmailVerification] = useState({
    otp: "",
    isOtpSent: false,
    isVerifying: false,
    isSendingOtp: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendOtp = async () => {
    if (!form.email) {
      toast.error("Please enter your email address");
      return;
    }

    setEmailVerification((prev) => ({ ...prev, isSendingOtp: true }));

    // Simulate API call to send OTP
    setTimeout(() => {
      toast.success("Verification code sent to your email!");
      setEmailVerification((prev) => ({
        ...prev,
        isOtpSent: true,
        isSendingOtp: false,
      }));
    }, 1500);
  };

  const handleVerifyOtp = async () => {
    if (!emailVerification.otp) {
      toast.error("Please enter the verification code");
      return;
    }

    if (emailVerification.otp.length !== 6) {
      toast.error("Verification code must be 6 digits");
      return;
    }

    setEmailVerification((prev) => ({ ...prev, isVerifying: true }));

    // Simulate API call to verify OTP
    setTimeout(() => {
      // For demo purposes, accept any 6-digit OTP
      if (
        emailVerification.otp === "123456" ||
        emailVerification.otp.length === 6
      ) {
        toast.success("Email verified successfully!");
        verifyEmail(form.email); // Mark email as verified globally
        setEmailVerification((prev) => ({
          ...prev,
          isVerifying: false,
        }));
      } else {
        toast.error("Invalid verification code. Please try again.");
        setEmailVerification((prev) => ({ ...prev, isVerifying: false }));
      }
    }, 1500);
  };

  const handleSubmit = async () => {
    if (!isEmailVerified(form.email)) {
      toast.error("Please verify your email first");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(
        "Enquiry submitted successfully! We will respond within 24 hours."
      );
      resetForm();
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      urgency: "",
    });
    setEmailVerification({
      otp: "",
      isOtpSent: false,
      isVerifying: false,
      isSendingOtp: false,
    });
  };

  const isFormEmailVerified = isEmailVerified(form.email);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 border-slate-700 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center space-x-2">
            <HelpCircle className="h-5 w-5" />
            <span>Course Enquiry</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Have questions about {course?.title}? Send us your enquiry and we'll
            get back to you promptly.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="enquiry-name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="enquiry-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="enquiry-email" className="text-white">
                Email Address *
              </Label>
              <Input
                id="enquiry-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="bg-slate-700 border-slate-600 text-white"
                disabled={emailVerification.isOtpSent}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="enquiry-phone" className="text-white">
              Phone Number
            </Label>
            <Input
              id="enquiry-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Enter your phone number (optional)"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="enquiry-subject" className="text-white">
              Subject *
            </Label>
            <Select
              value={form.subject}
              onValueChange={(value) => setForm({ ...form, subject: value })}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select enquiry type" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="course-content">
                  Course Content & Curriculum
                </SelectItem>
                <SelectItem value="pricing-payment">
                  Pricing & Payment Options
                </SelectItem>
                <SelectItem value="schedule-timing">
                  Schedule & Timing
                </SelectItem>
                <SelectItem value="prerequisites">
                  Prerequisites & Requirements
                </SelectItem>
                <SelectItem value="certification">
                  Certification & Career Support
                </SelectItem>
                <SelectItem value="technical-support">
                  Technical Support
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="enquiry-urgency" className="text-white">
              Response Priority
            </Label>
            <Select
              value={form.urgency}
              onValueChange={(value) => setForm({ ...form, urgency: value })}
            >
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
            <Label htmlFor="enquiry-message" className="text-white">
              Your Message *
            </Label>
            <Textarea
              id="enquiry-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Please describe your questions or requirements in detail..."
              className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
            />
          </div>

          {/* Email Verification Section */}
          {form.email && !isFormEmailVerified && (
            <div className="bg-blue-600/10 border border-blue-600/30 p-4 rounded-lg">
              <h4 className="text-white mb-3 flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Verification Required</span>
              </h4>

              {!emailVerification.isOtpSent ? (
                <div className="flex items-end space-x-2">
                  <div className="flex-1">
                    <Label className="text-blue-200">
                      Email to verify: {form.email}
                    </Label>
                  </div>
                  <Button
                    onClick={handleSendOtp}
                    disabled={emailVerification.isSendingOtp}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {emailVerification.isSendingOtp ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Send Code"
                    )}
                  </Button>
                </div>
              ) : (
                <div>
                  <Label className="text-blue-200">
                    Enter 6-digit verification code sent to {form.email}
                  </Label>
                  <div className="flex space-x-2 mt-2">
                    <Input
                      type="text"
                      maxLength={6}
                      value={emailVerification.otp}
                      onChange={(e) =>
                        setEmailVerification((prev) => ({
                          ...prev,
                          otp: e.target.value.replace(/\D/g, ""),
                        }))
                      }
                      placeholder="Enter 6-digit code"
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                    <Button
                      onClick={handleVerifyOtp}
                      disabled={
                        emailVerification.isVerifying ||
                        emailVerification.otp.length !== 6
                      }
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {emailVerification.isVerifying ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        "Verify"
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-blue-300 mt-2">
                    Demo: Use code "123456" or any 6-digit number |
                    <button
                      onClick={handleSendOtp}
                      className="text-blue-400 hover:text-blue-300 ml-1 underline"
                      disabled={emailVerification.isSendingOtp}
                    >
                      Resend Code
                    </button>
                  </p>
                </div>
              )}
            </div>
          )}

          {isFormEmailVerified && (
            <div className="bg-green-600/20 border border-green-600/30 p-3 rounded-lg">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Email verified successfully!</span>
              </div>
            </div>
          )}

          <Button
            onClick={handleSubmit}
            disabled={
              !form.name ||
              !form.email ||
              !form.subject ||
              !form.message ||
              !isFormEmailVerified ||
              isSubmitting
            }
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
  );
}
