
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, idx) => (
        <div 
          key={idx}
          className={`flex flex-col items-center ${idx < steps.length - 1 ? "w-full" : ""}`}
        >
          <div className="relative">
            <div 
              className={`step-circle flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${currentStep > idx + 1 ? "bg-green-500 border-green-600" : 
                  currentStep === idx + 1 ? "bg-blue-500 border-blue-600" : "bg-gray-200 border-gray-300"} 
                text-white font-medium z-10`}
            >
              {currentStep > idx + 1 ? <Check size={20} /> : idx + 1}
            </div>
            {idx < steps.length - 1 && (
              <div 
                className={`absolute top-5 left-10 w-full h-0.5 
                  ${currentStep > idx + 1 ? "bg-green-500" : "bg-gray-300"}`}
              ></div>
            )}
          </div>
          <p className="text-center mt-2 text-xs sm:text-sm">
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
