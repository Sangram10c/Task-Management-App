import React from "react";
import { HomeIcon, ClipboardDocumentListIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-3 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Title */}
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <ClipboardDocumentListIcon className="w-8 h-8 text-white" />
          Task Management App
        </h1>

        {/* Navigation Icons */}
        <nav className="flex items-center gap-6">
          <button className="flex flex-col items-center hover:text-blue-200 transition">
            <HomeIcon className="w-6 h-6" />
            <span className="text-sm">Home</span>
          </button>
          <button className="flex flex-col items-center hover:text-blue-200 transition">
            <ClipboardDocumentListIcon className="w-6 h-6" />
            <span className="text-sm">Tasks</span>
          </button>
          <button className="flex flex-col items-center hover:text-blue-200 transition">
            <InformationCircleIcon className="w-6 h-6" />
            <span className="text-sm">About</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
