interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "AI for Non-Tech Professionals",
    description:
      "Master AI tools and concepts without coding. Perfect for business professionals, marketers, designers, and entrepreneurs looking to leverage AI in their work.",
  },
  {
    id: 2,
    title: "Machine Learning Foundations",
    description:
      "Learn the basics of machine learning, algorithms, and data science. Ideal for aspiring data scientists and engineers.",
  },
  {
    id: 3,
    title: "AI Product Management",
    description:
      "Bridge the gap between AI technology and business strategy. For product managers and leaders who want to drive AI innovation.",
  },
];

interface CoursesPageProps {
  onBackToLanding: () => void;
  onGetStarted: () => void;
}

export function CoursesPageImproved({
  onBackToLanding,
  onGetStarted,
}: CoursesPageProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded"
          onClick={onBackToLanding}
        >
          Back to Landing
        </button>
      </header>
      <section>
        <ul className="space-y-6">
          {courses.map((course) => (
            <li key={course.id} className="bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p>{course.description}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={onGetStarted}
              >
                Get Started
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
