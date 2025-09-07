import React from 'react';
import { Card, CardContent } from '../ui/card';
import { CheckCircle, Users, Target, Globe } from 'lucide-react';

export function TeamBenefitsSection() {
  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Upskill your Team, Upscale your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your team's skills to get efficiency and revenue innovation for your organization through comprehensive AI training.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Self-paced skills content</h3>
                  <p className="text-gray-300">
                    Allow your team to learn at their own pace with our comprehensive self-directed learning materials and flexible scheduling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Office hours with Mentors for ongoing support</h3>
                  <p className="text-gray-300">
                    Regular one-on-one sessions with AI experts to provide guidance, answer questions, and ensure continuous learning progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Project-based approach to assess progress</h3>
                  <p className="text-gray-300">
                    Hands-on projects that simulate real-world scenarios, allowing teams to apply their knowledge and track measurable progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Facilitated community access</h3>
                  <p className="text-gray-300">
                    Access to our exclusive community of AI professionals, fostering collaboration, networking, and continued learning opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}