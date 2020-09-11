import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FeedList from "./components/FeedList";
import ArticleList from "./components/ArticleList";
import bg from "./bg.svg";
import "./App.css";

const apiUrl = process.env.REACT_APP_API_URL;

export default function App() {
  const [currentFeedId, setCurrentFeedId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [articles, setArticles] = useState([]);

  // get feeds
  useEffect(() => {
    fetch(`${apiUrl}/feeds/`)
      .then((res) => res.json())
      .then(setFeeds);
  }, []);

  // get articles
  useEffect(() => {
    let url = `${apiUrl}/articles/`;
    if (currentFeedId) url += `?feed=${currentFeedId}`;

    fetch(url)
      .then((res) => res.json())
      .then(setArticles);
  }, [currentFeedId]);

  // show an error if no API_URL exists
  if (!apiUrl)
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-700 font-bold text-3xl">
        Please add your REACT_APP_API_URL to your environment variables.
      </div>
    );

  // our main template
  return (
    <>
      <div
        className="hidden lg:block"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
        }}
      >
        <Header />
      </div>

      {/* content === sidebar + main content */}
      <div className="bg-blue-100 bg-opacity-25 min-h-screen lg:flex px-10 py-6">
        {/* sidebar left */}
        <div className="lg:w-1/5 py-4 pr-8">
          {/* sidebar header */}
          <div className="pb-6 mb-6 border-b border-gray-300 space-y-6">
            <button className="block py-2 px-4 rounded bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-red-100 uppercase text-sm tracking-wider">
              Subscribe
            </button>

            <button className="block w-full text-left text-gray-800 hover:text-gray-900 font-bold">
              Home
            </button>
          </div>

          {/* sidebar content */}
          {/* feed list */}
          <FeedList feeds={feeds} setCurrentFeedId={setCurrentFeedId} />
        </div>
        <div className="lg:w-4/5 py-4">
          <h2 className="text-lg pb-2 font-bold text-gray-900 border-b border-gray-200">
            Articles
          </h2>
          {/* article list */}
          <ArticleList articles={articles} />
        </div>
      </div>
    </>
  );
}
