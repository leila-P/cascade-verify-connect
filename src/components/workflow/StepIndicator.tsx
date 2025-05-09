
import React from 'react';
import { Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full mb-8">
      {/* Desktop Steps Indicator */}
      <div className="hidden md:flex justify-between mb-8 relative">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className={`flex flex-col items-center ${idx < steps.length - 1 ? "w-full" : ""}`}
          >
            <div className="relative">
              <div 
                className={`step-circle flex items-center justify-center w-12 h-12 rounded-full border-2 shadow-lg transition-all duration-300 
                  ${currentStep > idx + 1 
                    ? "bg-gradient-to-br from-green-400 to-green-600 border-green-600 scale-105 transform" 
                    : currentStep === idx + 1 
                      ? "bg-gradient-to-br from-blue-400 to-blue-600 border-blue-600 scale-110 transform" 
                      : "bg-white border-gray-300"} 
                  text-white font-medium z-10`}
              >
                {currentStep > idx + 1 ? <Check size={22} className="text-white" /> : <span className={currentStep === idx + 1 ? "text-white" : "text-gray-500"}>{idx + 1}</span>}
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute top-6 left-12 w-full h-0.5">
                  <div 
                    className={`h-full ${currentStep > idx + 1 ? "bg-green-500" : "bg-gray-300"}`}
                    style={{ width: '100%' }}
                  ></div>
                </div>
              )}
            </div>
            <p className={`text-center mt-3 font-medium transition-colors 
              ${currentStep === idx + 1 ? "text-primary" : 
                currentStep > idx + 1 ? "text-green-600" : "text-gray-500"}`}>
              {step}
            </p>
          </div>
        ))}
      </div>
      
      {/* Mobile Steps Indicator */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between px-2 mb-4">
          <span className="text-sm font-medium text-gray-500">مرحله {currentStep} از {steps.length}</span>
          <span className="text-sm font-medium text-primary">{steps[currentStep-1]}</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          {steps.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full 
                ${idx + 1 < currentStep ? "bg-blue-600" : idx + 1 === currentStep ? "bg-blue-400" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
