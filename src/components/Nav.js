import React from "react";

export default function Nav() {
  return (
    <div className="border-b border-gray-200">
      <div className="py-3 flex px-10">
        <div className="w-1/5 flex items-center">
          <h2 className="text-xl text-red-500">Reader</h2>
        </div>

        {/* =============== */}
        <div className="w-4/5 flex space-x-4">
          <button className="py-2 px-4 rounded bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-100 border border-gray-300">
            Refresh
          </button>
          <button className="rounded bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-100 border border-gray-300 flex justify-between">
            <span className="py-2 px-4">Mark all as read</span>
            <span
              className="p-2 inline-block border-l border-gray-300"
              role="img"
              aria-label="Down Arrow"
            >
              👇
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
