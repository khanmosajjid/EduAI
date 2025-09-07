import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface BootcampSectionProps {
  onGetStarted: () => void;
}

export function BootcampSection({ onGetStarted }: BootcampSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-4">
          <span className="font-bold">
            Learn AI & Software Development from
          </span>
        </h2>
        <h3 className="text-2xl md:text-3xl text-yellow-400 mb-8">
          NHTJR? Experts
        </h3>
        <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
          Get hands-on experience with our industry-leading bootcamp. Learn from
          professionals who are currently developing AI solutions with 7+ years
          of industry experience.
        </p>

        <Card className="bg-gradient-to-r from-orange-400 to-yellow-500 border-0 p-8 max-w-2xl mx-auto">
          <CardContent className="p-0 text-center">
            <h4 className="text-2xl text-black mb-4">Gen-AI Bootcamp</h4>
            <p className="text-black/80 mb-6">
              Intensive 8-week program covering machine learning, AI, machine
              learning, and more. Learn everything you need to become an AI
              expert.
            </p>
            <Button
              onClick={onGetStarted}
              className="bg-black text-white hover:bg-gray-800"
            >
              Join Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
