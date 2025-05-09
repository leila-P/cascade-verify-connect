
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
          className={`step-item ${currentStep === idx + 1 ? "active" : ""} ${
            currentStep > idx + 1 ? "complete" : ""
          }`}
        >
          <div className={`step ${currentStep === idx + 1 ? "active" : ""} ${
            currentStep > idx + 1 ? "complete" : ""
          }`}>
            {currentStep > idx + 1 ? <Check size={20} /> : idx + 1}
          </div>
          <p className="text-center mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
