
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import StepIndicator from './StepIndicator';
import CourseCreationStep from './steps/CourseCreationStep';
import CourseContentStep from './steps/CourseContentStep';
import CoursePreviewStep from './steps/CoursePreviewStep';
import CoursePublishStep from './steps/CoursePublishStep';
import CourseBrowseStep from './steps/CourseBrowseStep';
import CoursePaymentStep from './steps/CoursePaymentStep';
import CourseViewingStep from './steps/CourseViewingStep';

// Updated type to represent Teacher and Student
type UserType = "A" | "B";

interface WorkflowContainerProps {
  userType: UserType;
}

const WorkflowContainer: React.FC<WorkflowContainerProps> = ({ userType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Different steps for teachers and students
  const teacherSteps = [
    "ایجاد دوره",
    "آپلود محتوا",
    "پیش‌نمایش",
    "انتشار دوره"
  ];
  
  const studentSteps = [
    "مرور دوره‌ها",
    "پرداخت",
    "دسترسی به محتوا"
  ];
  
  const steps = userType === "A" ? teacherSteps : studentSteps;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    if (userType === "A") { // Teacher workflow
      switch (currentStep) {
        case 1:
          return <CourseCreationStep />;
        case 2:
          return <CourseContentStep />;
        case 3:
          return <CoursePreviewStep />;
        case 4:
          return <CoursePublishStep />;
        default:
          return <CourseCreationStep />;
      }
    } else { // Student workflow
      switch (currentStep) {
        case 1:
          return <CourseBrowseStep />;
        case 2:
          return <CoursePaymentStep />;
        case 3:
          return <CourseViewingStep />;
        default:
          return <CourseBrowseStep />;
      }
    }
  };

  const borderColor = userType === "A" ? "border-userA" : "border-userB";
  
  // Updated labels for teachers and students
  const userTypeLabel = userType === "A" ? "مدرس" : "شاگرد";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className={`border-t-4 ${borderColor}`}>
        <CardHeader>
          <CardTitle className="text-center">
            {userType === "A" ? "پنل مدیریت دوره‌های آموزشی" : "دوره‌های آموزشی"}
          </CardTitle>
          <div className="text-center text-sm text-muted-foreground mb-4">
            شما به عنوان {userTypeLabel} وارد شده‌اید
          </div>
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
            {currentStep === steps.length ? "پایان فرآیند" : "مرحله بعد"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WorkflowContainer;
