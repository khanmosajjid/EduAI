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
import {
  MessageCircle,
  Mail,
  CheckCircle,
  Calendar,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useEmailVerification } from "../../../contexts/EmailVerificationContext";

interface Course {
  id: number;
  title: string;
}

interface CounselorDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CounselorDialog({
  course,
  isOpen,
  onClose,
}: CounselorDialogProps) {
  const { isEmailVerified, verifyEmail } = useEmailVerification();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    timezone: "",
    experience: "",
    goals: "",
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
        "Counselor meeting scheduled! You will receive a confirmation email shortly."
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
      preferredTime: "",
      timezone: "",
      experience: "",
      goals: "",
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
            <MessageCircle className="h-5 w-5" />
            <span>Schedule Enquire</span>
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Schedule a free consultation about {course?.title} with our
            education counselor.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="counselor-name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="counselor-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your full name"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="counselor-email" className="text-white">
                Email Address *
              </Label>
              <Input
                id="counselor-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="bg-slate-700 border-slate-600 text-white"
                disabled={emailVerification.isOtpSent}
              />
            </div>
            <div>
              <Label htmlFor="counselor-phone" className="text-white">
                Phone Number *
              </Label>
              <Input
                id="counselor-phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Enter your phone number"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="counselor-timezone" className="text-white">
                Timezone
              </Label>
              <Select
                value={form.timezone}
                onValueChange={(value) => setForm({ ...form, timezone: value })}
              >
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
            <Label htmlFor="counselor-preferredTime" className="text-white">
              Preferred Time *
            </Label>
            <Input
              id="counselor-preferredTime"
              value={form.preferredTime}
              onChange={(e) =>
                setForm({ ...form, preferredTime: e.target.value })
              }
              placeholder="e.g., Weekdays 10 AM - 2 PM, or specific date/time"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="counselor-experience" className="text-white">
              Current Experience Level
            </Label>
            <Select
              value={form.experience}
              onValueChange={(value) => setForm({ ...form, experience: value })}
            >
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select your experience" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="complete-beginner">
                  Complete Beginner
                </SelectItem>
                <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="counselor-goals" className="text-white">
              Learning Goals
            </Label>
            <Textarea
              id="counselor-goals"
              value={form.goals}
              onChange={(e) => setForm({ ...form, goals: e.target.value })}
              placeholder="Tell us about your learning objectives and career goals..."
              className="bg-slate-700 border-slate-600 text-white min-h-[80px]"
            />
          </div>

          <div>
            <Label htmlFor="counselor-urgency" className="text-white">
              How soon do you want to start?
            </Label>
            <Select
              value={form.urgency}
              onValueChange={(value) => setForm({ ...form, urgency: value })}
            >
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
              !form.phone ||
              !form.preferredTime ||
              !isFormEmailVerified ||
              isSubmitting
            }
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
  );
}
