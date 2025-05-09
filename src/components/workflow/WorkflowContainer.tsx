
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
import { useIsMobile } from '@/hooks/use-mobile';

// Updated type to represent Teacher and Student
type UserType = "A" | "B";

interface WorkflowContainerProps {
  userType: UserType;
}

const WorkflowContainer: React.FC<WorkflowContainerProps> = ({ userType }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();
  
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

  // Updated labels and styling for teachers and students
  const userTypeLabel = userType === "A" ? "مدرس" : "شاگرد";
  const userIconClass = userType === "A" ? "text-userA" : "text-userB";
  const userBgClass = userType === "A" ? "bg-userA/10" : "bg-userB/10";
  const userBorderClass = userType === "A" ? "border-userA" : "border-userB";
  const userBgGradient = userType === "A" 
    ? "bg-gradient-to-br from-userA/10 to-userA/5" 
    : "bg-gradient-to-br from-userB/10 to-userB/5";
  const userTextClass = userType === "A" ? "text-userA" : "text-userB";
  const userButtonClass = userType === "A" 
    ? "bg-gradient-to-r from-userA to-userA-dark hover:from-userA-dark hover:to-userA" 
    : "bg-gradient-to-r from-userB to-userB-dark hover:from-userB-dark hover:to-userB";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className={`overflow-hidden shadow-lg rounded-xl border-t-4 ${userBorderClass}`}>
        <CardHeader className={`${userBgGradient}`}>
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${userBgClass} rounded-full flex items-center justify-center mr-3`}>
              {userType === "A" ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-userA" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-userB" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
            </div>
            <div>
              <CardTitle className={`text-xl ${userTextClass}`}>
                {userType === "A" ? "پنل مدیریت دوره‌های آموزشی" : "دوره‌های آموزشی"}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                شما به عنوان {userTypeLabel} وارد شده‌اید
              </p>
            </div>
          </div>
          <StepIndicator steps={steps} currentStep={currentStep} />
        </CardHeader>
        <CardContent className="py-8">
          {renderStep()}
        </CardContent>
        <CardFooter className="flex justify-between bg-gray-50 border-t">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            مرحله قبل
          </Button>
          <Button 
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className={`${userButtonClass} text-white shadow-md`}
          >
            {currentStep === steps.length ? "پایان فرآیند" : "مرحله بعد"}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WorkflowContainer;
