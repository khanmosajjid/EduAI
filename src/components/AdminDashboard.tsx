/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  BookOpen, 
  LogOut, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Award,
  Search,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  BarChart3
} from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

interface AdminDashboardProps {
  user: { id: string; name: string; email: string; role: 'student' | 'admin' };
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateCourse, setShowCreateCourse] = useState(false);

  const stats = [
    { label: 'Total Students', value: '10,234', change: '+12%', icon: Users },
    { label: 'Active Courses', value: '127', change: '+5%', icon: BookOpen },
    { label: 'Revenue', value: '$84,120', change: '+18%', icon: DollarSign },
    { label: 'Completion Rate', value: '87%', change: '+3%', icon: TrendingUp }
  ];

  const recentStudents = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', joinDate: '2024-01-15', courses: 3, status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', joinDate: '2024-01-14', courses: 2, status: 'Active' },
    { id: 3, name: 'Carol Brown', email: 'carol@example.com', joinDate: '2024-01-13', courses: 1, status: 'Inactive' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', joinDate: '2024-01-12', courses: 4, status: 'Active' },
    { id: 5, name: 'Emma Davis', email: 'emma@example.com', joinDate: '2024-01-11', courses: 2, status: 'Active' }
  ];

  const courses = [
    { 
      id: 1, 
      title: 'React Fundamentals', 
      instructor: 'Sarah Wilson', 
      students: 1234, 
      rating: 4.8, 
      status: 'Published',
      revenue: '$12,450'
    },
    { 
      id: 2, 
      title: 'Data Science with Python', 
      instructor: 'Dr. Michael Chen', 
      students: 987, 
      rating: 4.9, 
      status: 'Published',
      revenue: '$15,680'
    },
    { 
      id: 3, 
      title: 'UI/UX Design Principles', 
      instructor: 'Emma Rodriguez', 
      students: 756, 
      rating: 4.7, 
      status: 'Draft',
      revenue: '$8,920'
    }
  ];

  const CreateCourseForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Create New Course</CardTitle>
        <CardDescription>Add a new course to the platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="course-title">Course Title</Label>
            <Input id="course-title" placeholder="Enter course title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-instructor">Instructor</Label>
            <Input id="course-instructor" placeholder="Instructor name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="course-description">Description</Label>
          <Textarea id="course-description" placeholder="Course description" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="course-price">Price ($)</Label>
            <Input id="course-price" type="number" placeholder="99" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-duration">Duration (weeks)</Label>
            <Input id="course-duration" type="number" placeholder="8" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-level">Level</Label>
            <Input id="course-level" placeholder="Beginner" />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button>Create Course</Button>
          <Button variant="outline" onClick={() => setShowCreateCourse(false)}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl">EduPlatform Admin</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Badge variant="secondary">Admin</Badge>
            <span className="hidden md:inline">{user.name}</span>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-primary">{stat.value}</div>
                <p className="text-xs text-green-600">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Student Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.slice(0, 5).map((student) => (
                      <div key={student.id} className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{student.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Enrolled in {student.courses} course{student.courses !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Courses */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.slice(0, 3).map((course) => (
                      <div key={course.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm">{course.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {course.students} students • ⭐ {course.rating}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-primary">{course.revenue}</p>
                          <p className="text-xs text-muted-foreground">Revenue</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Student Management</CardTitle>
                    <CardDescription>Manage all registered students</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Courses</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.joinDate}</TableCell>
                        <TableCell>{student.courses}</TableCell>
                        <TableCell>
                          <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                            {student.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {showCreateCourse && <CreateCourseForm />}
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Course Management</CardTitle>
                    <CardDescription>Manage all courses on the platform</CardDescription>
                  </div>
                  <Button onClick={() => setShowCreateCourse(!showCreateCourse)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Title</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>{course.title}</TableCell>
                        <TableCell>{course.instructor}</TableCell>
                        <TableCell>{course.students.toLocaleString()}</TableCell>
                        <TableCell>⭐ {course.rating}</TableCell>
                        <TableCell className="text-primary">{course.revenue}</TableCell>
                        <TableCell>
                          <Badge variant={course.status === 'Published' ? 'default' : 'secondary'}>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Award className="h-4 w-4 mr-2" />
                                Manage Content
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Enrollment Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">January 2025</span>
                      <span className="text-sm text-primary">+234 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">December 2024</span>
                      <span className="text-sm text-primary">+189 students</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">November 2024</span>
                      <span className="text-sm text-primary">+156 students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Revenue Growth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="text-sm text-green-600">$84,120</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Month</span>
                      <span className="text-sm">$71,250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Growth Rate</span>
                      <span className="text-sm text-green-600">+18%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform-wide settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="EduPlatform" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Support Email</Label>
                  <Input id="support-email" defaultValue="support@eduplatform.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-students">Max Students per Course</Label>
                  <Input id="max-students" type="number" defaultValue="500" />
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}