import React from "react";
import { motion } from "framer-motion";

const tabVariants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

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
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE] ";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {/* we cannot animate the border, but we can create a div that has a border */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={tabVariants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
