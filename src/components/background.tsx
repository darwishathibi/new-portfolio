import React from "react";

const BrightBlurredGradientBackground = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Vibrant red/orange area in top right */}
      <div className="absolute -top-20 -right-20 w-2/3 h-2/3 rounded-full bg-gradient-to-bl from-red-500 via-orange-400 to-yellow-300 blur-3xl opacity-90"></div>

      {/* Bright mint/teal glow in middle left */}
      <div className="absolute top-1/4 -left-20 w-1/2 h-1/2 rounded-full bg-teal-300 blur-3xl opacity-80"></div>

      {/* Vibrant blue/purple area in bottom left */}
      <div className="absolute -bottom-10 left-10 w-3/5 h-2/5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl opacity-80"></div>

      {/* Bright yellow highlight */}
      <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 rounded-full bg-yellow-200 blur-3xl opacity-70"></div>

      {/* Light purple accent */}
      <div className="absolute top-1/3 left-1/3 w-1/5 h-1/5 rounded-full bg-purple-300 blur-3xl opacity-70"></div>

      {/* Subtle overlay to maintain some depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-30"></div>
    </div>
  );
};

export default BrightBlurredGradientBackground;
