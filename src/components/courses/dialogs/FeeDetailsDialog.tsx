import React from 'react';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../ui/dialog';
import { CheckCircle } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  features: string[];
}

interface FeeDetailsDialogProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onGetStarted: () => void;
}

export function FeeDetailsDialog({ course, isOpen, onClose, onGetStarted }: FeeDetailsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white">Course Fee Breakdown</DialogTitle>
          <DialogDescription className="text-gray-300">
            Complete pricing details for {course?.title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Course Fee</span>
              <div className="text-right">
                <span className="text-2xl text-white">${course?.price}</span>
                {course?.originalPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    ${course.originalPrice}
                  </div>
                )}
              </div>
            </div>
            
            {course?.originalPrice && (
              <div className="bg-green-600/20 border border-green-600/30 p-3 rounded-lg mb-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">
                    Limited Time Offer: Save ${course.originalPrice - course.price}!
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Duration</span>
                <span>{course?.duration}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Level</span>
                <span>{course?.level}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Certificate</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Lifetime Access</span>
                <span>Yes</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-3">What's Included:</h4>
            <div className="space-y-2">
              {course?.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-600">
            <Button 
              onClick={() => {
                onGetStarted();
                onClose();
              }}
              className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-black"
            >
              Enroll Now - ${course?.price}
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}