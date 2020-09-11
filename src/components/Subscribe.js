import React, { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

export default function Subscribe({ addFeed }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <div>
      {/* modal */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <div ref={modalRef} className="p-10 bg-white rounded shadow-2xl">
          i am a modal
        </div>
      </div>

      {/* button */}
      <button
        className="block py-2 px-4 rounded bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-red-100 uppercase text-sm tracking-wider"
        onClick={() => setIsOpen(true)}
      >
        Subscribe
      </button>
    </div>
  );
}
