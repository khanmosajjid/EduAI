import React from 'react';

export function CoursesHero() {
  return (
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
  );
}