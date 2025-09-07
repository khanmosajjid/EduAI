import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { AuthPage } from "./components/AuthPage";
import { CoursesPage } from "./components/CoursesPage";
import { StudentDashboard } from "./components/StudentDashboard";
import { AdminDashboard } from "./components/AdminDashboard";
import { EmailVerificationProvider } from "./contexts/EmailVerificationContext";

type Page =
  | "landing"
  | "auth"
  | "courses"
  | "student-dashboard"
  | "admin-dashboard";
type User = {
  id: string;
  name: string;
  email: string;
  role: "student" | "admin";
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    if (userData.role === "admin") {
      setCurrentPage("admin-dashboard");
    } else {
      setCurrentPage("student-dashboard");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("landing");
  };

  const navigateToAuth = () => {
    setCurrentPage("auth");
  };

  const navigateToCourses = () => {
    setCurrentPage("courses");
  };

  const navigateToLanding = () => {
    setCurrentPage("landing");
  };

  return (
    <EmailVerificationProvider>
      <div className="min-h-screen bg-slate-900">
        {currentPage === "landing" && (
          <LandingPage
            onGetStarted={navigateToCourses}
            onViewCourses={navigateToCourses}
          />
        )}
        {currentPage === "courses" && (
          <CoursesPage
            onBackToLanding={navigateToLanding}
            onGetStarted={navigateToAuth}
          />
        )}
        {currentPage === "auth" && (
          <AuthPage onLogin={handleLogin} onBackToLanding={navigateToLanding} />
        )}
        {currentPage === "student-dashboard" && user && (
          <StudentDashboard user={user} onLogout={handleLogout} />
        )}
        {currentPage === "admin-dashboard" && user && (
          <AdminDashboard user={user} onLogout={handleLogout} />
        )}
      </div>
    </EmailVerificationProvider>
  );
}
