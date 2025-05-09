
import React from 'react';

type UserType = "A" | "B" | null;

interface UserTypeSelectionProps {
  selectedType: UserType;
  onSelectType: (type: UserType) => void;
}

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ 
  selectedType, 
  onSelectType 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <button
        type="button"
        onClick={() => onSelectType("A")}
        className={`relative overflow-hidden group rounded-xl transition-all duration-300 ease-in-out p-6 shadow-md flex flex-col items-center justify-center ${
          selectedType === "A" 
            ? "bg-gradient-to-br from-userA to-userA-dark text-white" 
            : "bg-white hover:bg-gray-50 border-2 border-userA/30 hover:border-userA"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="h-16 w-16 rounded-full bg-userA/10 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${selectedType === "A" ? "text-white" : "text-userA"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <span className={`text-xl font-bold ${selectedType === "A" ? "text-white" : "text-userA"}`}>مدرس</span>
        <p className={`text-sm mt-2 ${selectedType === "A" ? "text-white/80" : "text-gray-500"}`}>
          ثبت و مدیریت دوره‌های آموزشی
        </p>
        {selectedType === "A" && (
          <div className="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </button>

      <button
        type="button"
        onClick={() => onSelectType("B")}
        className={`relative overflow-hidden group rounded-xl transition-all duration-300 ease-in-out p-6 shadow-md flex flex-col items-center justify-center ${
          selectedType === "B" 
            ? "bg-gradient-to-br from-userB to-userB-dark text-white" 
            : "bg-white hover:bg-gray-50 border-2 border-userB/30 hover:border-userB"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="h-16 w-16 rounded-full bg-userB/10 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${selectedType === "B" ? "text-white" : "text-userB"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <span className={`text-xl font-bold ${selectedType === "B" ? "text-white" : "text-userB"}`}>شاگرد</span>
        <p className={`text-sm mt-2 ${selectedType === "B" ? "text-white/80" : "text-gray-500"}`}>
          دسترسی به دوره‌های آموزشی
        </p>
        {selectedType === "B" && (
          <div className="absolute top-2 right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default UserTypeSelection;
