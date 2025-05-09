
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import StepIndicator from './StepIndicator';
import RegistrationStep from './steps/RegistrationStep';
import VerificationStep from './steps/VerificationStep';
import PaymentStep from './steps/PaymentStep';
import DocumentUploadStep from './steps/DocumentUploadStep';
import LinkSharingStep from './steps/LinkSharingStep';
import CompletionStep from './steps/CompletionStep';

type UserType = "A" | "B";

interface WorkflowContainerProps {
  userType: UserType;
}

const WorkflowContainer: React.FC<WorkflowContainerProps> = ({ userType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    "ثبت اطلاعات",
    "احراز هویت",
    "پرداخت",
    "بارگذاری اسناد",
    "ارسال لینک",
    "تکمیل",
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RegistrationStep userType={userType} />;
      case 2:
        return <VerificationStep userType={userType} />;
      case 3:
        return <PaymentStep userType={userType} />;
      case 4:
        return <DocumentUploadStep userType={userType} />;
      case 5:
        return <LinkSharingStep userType={userType} />;
      case 6:
        return <CompletionStep userType={userType} />;
      default:
        return <RegistrationStep userType={userType} />;
    }
  };

  const borderColor = userType === "A" ? "border-userA" : "border-userB";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className={`border-t-4 ${borderColor}`}>
        <CardHeader>
          <CardTitle className="text-center">
            {userType === "A" ? "فرآیند کاربر نوع A" : "فرآیند کاربر نوع B"}
          </CardTitle>
          <StepIndicator steps={steps} currentStep={currentStep} />
        </CardHeader>
        <CardContent className="pb-8">
          {renderStep()}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            مرحله قبل
          </Button>
          <Button 
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className={userType === "A" ? "bg-userA hover:bg-userA-dark" : "bg-userB hover:bg-userB-dark"}
          >
            {currentStep === steps.length - 1 ? "پایان فرآیند" : "مرحله بعد"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WorkflowContainer;
