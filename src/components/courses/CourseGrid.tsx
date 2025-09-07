import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Download,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import { BrochureDialog } from "./dialogs/BrochureDialog";
import { CounselorDialog } from "./dialogs/CounselorDialog";
import { EnquiryDialog } from "./dialogs/EnquiryDialog";
import { FeeDetailsDialog } from "./dialogs/FeeDetailsDialog";

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

interface CourseGridProps {
  onGetStarted: () => void;
}

export function CourseGrid({ onGetStarted }: CourseGridProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const courses: Course[] = [
    {
      id: 1,
      title: "AI for Non-Tech Professionals",
      description:
        "Master AI tools and concepts without coding. Perfect for business professionals, marketers, designers, and entrepreneurs looking to leverage AI in their work.",
      instructor: "Dr. Sarah Chen",
      duration: "8 weeks",
      level: "Beginner",
      price: 299,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1655891709782-15c1303a2a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc1NzE3MzE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Lightbulb,
      rating: 4.9,
      students: 2134,
      category: "Business AI",
      features: [
        "Live interactive sessions with AI experts",
        "Hands-on projects with real AI tools",
        "Industry case studies and use cases",
        "Certificate of completion",
        "Lifetime access to course materials",
        "24/7 community support",
      ],
      curriculum: [
        "Introduction to AI and Its Impact",
        "AI Tools for Content Creation",
        "ChatGPT and Language Models",
        "AI for Data Analysis and Insights",
        "AI in Marketing and Sales",
        "AI for Project Management",
        "Building AI-Powered Workflows",
        "Future of AI in Business",
      ],
      skillsGained: [
        "AI Tool Mastery",
        "Prompt Engineering",
        "Workflow Automation",
        "Data-Driven Decision Making",
        "AI Strategy Development",
      ],
    },
    {
      id: 2,
      title: "Machine Learning Foundations",
      description:
        "Learn the basics of machine learning, algorithms, and data science. Ideal for aspiring data scientists and engineers.",
      instructor: "Prof. John Lee",
      duration: "10 weeks",
      level: "Intermediate",
      price: 349,
      originalPrice: 449,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      icon: Download,
      rating: 4.8,
      students: 1850,
      category: "Tech AI",
      features: [
        "Algorithm deep dives",
        "Python & ML libraries",
        "Project-based learning",
        "Certificate of completion",
        "Mentor support",
      ],
      curriculum: [
        "Intro to ML",
        "Supervised & Unsupervised Learning",
        "Regression & Classification",
        "Clustering",
        "Model Evaluation",
        "Real-world Projects",
      ],
      skillsGained: [
        "ML Algorithms",
        "Python Programming",
        "Data Analysis",
        "Model Building",
      ],
    },
    {
      id: 3,
      title: "AI Product Management",
      description:
        "Bridge the gap between AI technology and business strategy. For product managers and leaders who want to drive AI innovation.",
      instructor: "Ms. Priya Singh",
      duration: "6 weeks",
      level: "Advanced",
      price: 399,
      originalPrice: 499,
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      icon: HelpCircle,
      rating: 4.7,
      students: 950,
      category: "Business AI",
      features: [
        "AI strategy workshops",
        "Case studies",
        "Leadership sessions",
        "Certificate of completion",
        "Peer networking",
      ],
      curriculum: [
        "AI in Product Management",
        "Business Models for AI",
        "Go-to-Market Strategies",
        "Ethics & Governance",
        "Scaling AI Products",
      ],
      skillsGained: [
        "AI Strategy",
        "Product Leadership",
        "Business Analysis",
        "Team Management",
      ],
    },
  ];

  const handleDialogOpen = (course: Course, dialogType: string) => {
    setSelectedCourse(course);
    setActiveDialog(dialogType);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
    setSelectedCourse(null);
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-slate-800/50 border-slate-700 backdrop-blur overflow-hidden"
            >
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
                      <h3 className="text-xl text-white mb-1">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        by {course.instructor}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl text-white">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => handleDialogOpen(course, "brochure")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Brochure
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => handleDialogOpen(course, "counselor")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Schedule Enquire
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => handleDialogOpen(course, "enquiry")}
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Enquiry
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                    onClick={() => handleDialogOpen(course, "fee")}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Fee Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialogs */}
      <BrochureDialog
        course={selectedCourse}
        isOpen={activeDialog === "brochure"}
        onClose={handleDialogClose}
      />

      <CounselorDialog
        course={selectedCourse}
        isOpen={activeDialog === "counselor"}
        onClose={handleDialogClose}
      />

      <EnquiryDialog
        course={selectedCourse}
        isOpen={activeDialog === "enquiry"}
        onClose={handleDialogClose}
      />

      <FeeDetailsDialog
        course={selectedCourse}
        isOpen={activeDialog === "fee"}
        onClose={handleDialogClose}
        onGetStarted={onGetStarted}
      />
    </section>
  );
}
