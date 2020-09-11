import React, { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useFeeds } from "../contexts/FeedContext";
import bg from "../big-bg.svg";

function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }
  return true;
}

export default function Subscribe() {
  const { addFeed } = useFeeds();
  const [isOpen, setIsOpen] = useState(true);
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setIsOpen(false));

  function handleSubmit(e) {
    e.preventDefault();
    setIsValid(true);

    if (!isValidUrl(url)) return setIsValid(false); // check if its a valid url

    addFeed(url);
    setIsOpen(false);
  }

  return (
    <div>
      {/* modal */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-blue-800 bg-opacity-75 fixed inset-0 flex items-center justify-center`}
      >
        <div
          ref={modalRef}
          className="px-10 py-24 lg:py-48 bg-white rounded shadow-2xl w-4/5 h-auto bg-cover bg-center text-center"
          style={{ backgroundImage: `url('${bg}')` }}
        >
          <h2 className="text-5xl text-white font-bold mb-12">Add a Feed</h2>

          {/* form to submit */}
          <form onSubmit={handleSubmit}>
            <div className="w-full md:w-2/3 flex mx-auto shadow-2xl text-lg">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://superdupersammy.com"
                className={`bg-white outline-none rounded-l-lg p-6 flex-grow border-4 border-r-0 ${
                  isValid ? "border-white" : "border-red-500"
                }`}
              />

              <button
                className={`flex-shrink rounded-r-lg p-6 bg-yellow-300 text-yellow-800 font-bold uppercase tracking-wide outline-none hover:bg-yellow-200 hover:text-yellow-900 focus:outline-none border-4 border-l-0 ${
                  isValid ? "border-yellow-300" : "border-red-500"
                }`}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* button */}
      <button
        className="block py-2 px-4 rounded bg-gradient-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-600 text-blue-100 uppercase text-sm tracking-wider"
        onClick={() => setIsOpen(true)}
      >
        Subscribe
      </button>
    </div>
  );
}
