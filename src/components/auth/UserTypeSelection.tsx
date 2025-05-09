
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
    <div className="flex justify-between space-x-4 rtl:space-x-reverse">
      <button
        type="button"
        onClick={() => onSelectType("A")}
        className={`user-type-a flex-1 py-2 px-4 rounded-md transition-colors ${
          selectedType === "A" ? "bg-userA text-white" : "border hover:bg-userA/10"
        }`}
      >
        مدرس
      </button>
      <button
        type="button"
        onClick={() => onSelectType("B")}
        className={`user-type-b flex-1 py-2 px-4 rounded-md transition-colors ${
          selectedType === "B" ? "bg-userB text-white" : "border hover:bg-userB/10"
        }`}
      >
        شاگرد
      </button>
    </div>
  );
};

export default UserTypeSelection;
