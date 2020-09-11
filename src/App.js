import React from "react";
import Header from "./components/Header";
import FeedList from "./components/FeedList";
import ArticleList from "./components/ArticleList";
import Subscribe from "./components/Subscribe";

import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://google-reader-clone-lay2v.ondigitalocean.app";

export default function App() {
  const { token } = useAuth();

  // show an error if no API_URL exists
  if (!apiUrl)
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-3xl">
        Please add your REACT_APP_API_URL to your environment variables.
      </div>
    );

  return (
    <>
      <Header />

      {/* content === sidebar + main content */}
      <div className="bg-blue-100 bg-opacity-25 min-h-screen lg:flex px-10 py-6">
        {/* sidebar left */}
        <div className="lg:w-1/5 py-4 pr-8">
          {/* sidebar header */}
          <div className="pb-6 mb-6 border-b border-gray-300 space-y-6">
            {/* {!token && <Login />}
            {token && <Subscribe />} */}

            <Login />
            <Subscribe />

            <button className="block w-full text-left text-gray-800 hover:text-gray-900 font-bold">
              Home
            </button>
          </div>

          {/* sidebar content */}
          {/* feed list */}
          <FeedList />
        </div>
        <div className="lg:w-4/5 py-4">
          <h2 className="text-lg pb-2 font-bold text-gray-900 border-b border-gray-200">
            Articles
          </h2>
          {/* article list */}
          <ArticleList />
        </div>
      </div>
    </>
  );
}
