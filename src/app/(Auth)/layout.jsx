import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-200 p-5 flex justify-center items-center">
        <h2 className="text-4xl font-semibold">Welcome Authentication</h2>
      </div>
    </div>
  );
};

export default layout;
