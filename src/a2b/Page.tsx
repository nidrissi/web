import React, * as react from "react";

export const Page: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      {children}
    </div>
  );
};
