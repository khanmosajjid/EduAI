import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowLeft, Mail, Lock, User, Shield, Sparkles } from "lucide-react";

// Google and LinkedIn SVG icons
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface AuthPageProps {
  onLogin: (user: {
    id: string;
    name: string;
    email: string;
    role: "student" | "admin";
  }) => void;
  onBackToLanding: () => void;
}

export function AuthPage({ onLogin, onBackToLanding }: AuthPageProps) {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock authentication - check for admin credentials
      const isAdmin =
        loginData.email === "admin@edu.com" &&
        loginData.password === "admin123";
      const user = {
        id: isAdmin ? "admin-1" : "student-1",
        name: isAdmin ? "Admin User" : "John Doe",
        email: loginData.email,
        role: isAdmin ? ("admin" as const) : ("student" as const),
      };

      onLogin(user);
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = {
        id: "student-new",
        name: signupData.name,
        email: signupData.email,
        role: "student" as const,
      };

      onLogin(user);
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = async (provider: "google" | "linkedin") => {
    setIsLoading(true);

    // Simulate OAuth flow
    setTimeout(() => {
      const user = {
        id: `${provider}-user-1`,
        name: provider === "google" ? "Google User" : "LinkedIn User",
        email: `user@${provider}.com`,
        role: "student" as const,
      };

      onLogin(user);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={onBackToLanding}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </header>

      {/* Auth Form */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl text-white">Avatar AI</span>
            </div>
            <h1 className="text-2xl text-white">Welcome!</h1>
            <p className="text-gray-300">Sign in to continue your AI journey</p>
          </div>

          {/* Social Login Options */}
          <div className="space-y-4 mb-6">
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12 relative bg-slate-800 border-slate-600 text-white hover:bg-slate-700 transition-colors"
                onClick={() => handleSocialLogin("google")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                    <span className="ml-3">Connecting to Google...</span>
                  </>
                ) : (
                  <>
                    <GoogleIcon />
                    <span className="ml-3">Continue with Google</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 relative bg-slate-800 border-slate-600 text-white hover:bg-slate-700 transition-colors"
                onClick={() => handleSocialLogin("linkedin")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                    <span className="ml-3">Connecting to LinkedIn...</span>
                  </>
                ) : (
                  <>
                    <LinkedInIcon />
                    <span className="ml-3">Continue with LinkedIn</span>
                  </>
                )}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-slate-600">
              <TabsTrigger
                value="login"
                className="text-gray-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Email
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="text-gray-300 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="bg-slate-800 border-slate-600">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-white">
                    Sign In with Email
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Enter your email and password to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-white">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-white">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="mt-4 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                    <p className="text-sm text-gray-300 mb-2">
                      Demo Credentials:
                    </p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <User className="h-3 w-3" />
                        <span>Student: student@demo.com / demo123</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Shield className="h-3 w-3" />
                        <span>Admin: admin@edu.com / admin123</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-600">
                      <p className="text-xs text-gray-400">
                        💡 Try the social login buttons above for quick access!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card className="bg-slate-800 border-slate-600">
                <CardHeader className="space-y-1">
                  <CardTitle>Create Account with Email</CardTitle>
                  <CardDescription>
                    Fill out the form below to create your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="John Doe"
                          className="pl-10"
                          value={signupData.name}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={signupData.email}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={signupData.password}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="signup-confirm"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                          value={signupData.confirmPassword}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              confirmPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>

                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-800">
                      🚀 <strong>Quick Start:</strong> Use Google or LinkedIn
                      login above for instant access!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
