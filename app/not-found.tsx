import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-full grid place-content-center bg-black">
      <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-9xl font-bold font-inter">404</h1>
        <h2 className="text-4xl font-bold font-open-sans text-gray">Not Found</h2>
      </div>
    </div>
  );
}
