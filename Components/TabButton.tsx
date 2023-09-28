import React from "react";

interface TabButtonsProps {
  active: boolean;
  selectTab: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

const TabButton: React.FC<TabButtonsProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active
    ? "text-white border-b border-primary-500"
    : "text-[#ADB7BE] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
