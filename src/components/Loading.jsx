import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-500"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  );
};

export default Loading;
