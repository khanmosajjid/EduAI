/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  BookOpen,
  LogOut,
  User,
  Clock,
  Award,
  Play,
  CheckCircle,
  Calendar,
  TrendingUp,
  Star,
  Search,
} from "lucide-react";
import { Input } from "./ui/input";

interface StudentDashboardProps {
  user: { id: string; name: string; email: string; role: "student" | "admin" };
  onLogout: () => void;
}

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const enrolledCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "Sarah Wilson",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      image:
        "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzU2NjE5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Programming",
      rating: 4.8,
      nextLesson: "Hooks and State Management",
    },
    {
      id: 2,
      title: "Data Science with Python",
      instructor: "Dr. Michael Chen",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      image:
        "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTY2MzkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Data Science",
      rating: 4.9,
      nextLesson: "Machine Learning Basics",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "completed",
      content: "Completed lesson: React Components",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "started",
      content: "Started course: Data Science with Python",
      time: "1 day ago",
    },
    {
      id: 3,
      type: "achievement",
      content: "Earned certificate: JavaScript Basics",
      time: "3 days ago",
    },
    {
      id: 4,
      type: "quiz",
      content: "Passed quiz: React Fundamentals Quiz 3",
      time: "5 days ago",
    },
  ];

  const recommendedCourses = [
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      students: 15420,
      duration: "8 weeks",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBpbnRlcmZhY2UlMjB1aXxlbnwxfHx8fDE3NTY2NTAzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$79",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl">EduPlatform</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-muted-foreground" />
              <span className="hidden md:inline">{user.name}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl p-6">
              <h1 className="text-2xl mb-2">Welcome back, {user.name}!</h1>
              <p className="opacity-90">
                Continue your learning journey and achieve your goals.
              </p>
              <div className="flex items-center space-x-6 mt-4">
                <div className="text-center">
                  <div className="text-xl">2</div>
                  <div className="text-sm opacity-80">Active Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">68%</div>
                  <div className="text-sm opacity-80">Avg Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">12</div>
                  <div className="text-sm opacity-80">Certificates</div>
                </div>
              </div>
            </div>

            {/* Tabs for different sections */}
            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="courses">My Courses</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="discover">Discover</TabsTrigger>
              </TabsList>

              {/* My Courses Tab */}
              <TabsContent value="courses" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <ImageWithFallback
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            className="bg-white/90 text-black hover:bg-white"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Continue
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary">{course.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{course.rating}</span>
                          </div>
                        </div>
                        <h3 className="mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          by {course.instructor}
                        </p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>
                              {course.completedLessons}/{course.totalLessons}{" "}
                              lessons
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">
                            Next: {course.nextLesson}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Progress Tab */}
              <TabsContent value="progress" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Weekly Goal</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl text-primary">8.5/10</div>
                      <p className="text-xs text-muted-foreground">
                        hours this week
                      </p>
                      <Progress value={85} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Streak</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl text-primary">15</div>
                      <p className="text-xs text-muted-foreground">
                        days in a row
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Completed</CardTitle>
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl text-primary">32</div>
                      <p className="text-xs text-muted-foreground">
                        lessons this month
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Certificates Tab */}
              <TabsContent value="certificates" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "JavaScript Fundamentals",
                      issueDate: "Dec 15, 2024",
                      id: "JS-001",
                    },
                    {
                      title: "HTML & CSS Mastery",
                      issueDate: "Nov 28, 2024",
                      id: "HTML-001",
                    },
                    {
                      title: "Git Version Control",
                      issueDate: "Nov 10, 2024",
                      id: "GIT-001",
                    },
                  ].map((cert, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-6">
                        <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="mb-2">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Certificate ID: {cert.id}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Issued: {cert.issueDate}
                        </p>
                        <Button variant="outline" size="sm">
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Discover Tab */}
              <TabsContent value="discover" className="space-y-6">
                <div>
                  <h3 className="mb-4">Recommended for You</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="aspect-video relative">
                          <ImageWithFallback
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 className="mb-2">{course.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            by {course.instructor}
                          </p>
                          <div className="flex items-center justify-between text-sm mb-3">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{course.rating}</span>
                              <span className="text-muted-foreground">
                                ({course.students.toLocaleString()})
                              </span>
                            </div>
                            <span className="text-primary">{course.price}</span>
                          </div>
                          <Button className="w-full" size="sm">
                            Enroll Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{activity.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Study Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm">React Components</p>
                    <p className="text-xs text-muted-foreground">
                      2:00 PM - 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Python Data Analysis</p>
                    <p className="text-xs text-muted-foreground">
                      4:00 PM - 5:30 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
