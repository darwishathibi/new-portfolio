import React from "react";
import BrightBlurredGradientBackground from "./background";
import { GradientLayoutProps } from "../../types";

const GradientLayout: React.FC<GradientLayoutProps> = ({ children }) => {
  return (
    // Make sure there's a return statement with JSX
    <div className="relative min-h-screen">
      {/* Fixed position background */}
      <div className="fixed inset-0 z-0">
        <BrightBlurredGradientBackground />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientLayout;
