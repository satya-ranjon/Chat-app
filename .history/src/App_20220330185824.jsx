import React from "react";

export default function App() {
  return (
    <div className="layout-wrapper  d-lg-flex">
      <div className="w-12 h-screen"></div>
      <div className="w-60 h-screen bg-red-100"></div>
      <div className="flex-grow h-screen bg-blue-100"></div>
      <div className="w-60 h-screen bg-red-100"></div>
    </div>
  );
}
