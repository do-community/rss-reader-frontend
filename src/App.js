import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FeedList from "./components/FeedList";
import ArticleList from "./components/ArticleList";
import "./App.css";

export default function App() {
  const [currentFeedId, setCurrentFeedId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [articles, setArticles] = useState([]);

  // get feeds
  useEffect(() => {
    fetch("https://rss-reader-ptfd6.ondigitalocean.app/feeds/")
      .then((res) => res.json())
      .then(setFeeds);
  }, []);

  // get articles
  useEffect(() => {
    let url = "https://rss-reader-ptfd6.ondigitalocean.app/articles/";
    if (currentFeedId) url += `?feed=${currentFeedId}`;

    fetch(url)
      .then((res) => res.json())
      .then(setArticles);
  }, [currentFeedId]);

  return (
    <>
      <Header />
      <Nav />

      {/* content === sidebar + main content */}
      <div className="flex px-10">
        <div className="w-1/5 py-4 pr-8">
          {/* sidebar header */}
          <div className="pb-3 mb-3 border-b border-gray-300 space-y-4">
            <button className="block py-2 px-4 rounded bg-gradient-to-b from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-red-100 uppercase text-sm tracking-wider">
              Subscribe
            </button>

            <button className="block text-gray-800 hover:text-gray-900">
              Home
            </button>
          </div>

          {/* sidebar content */}
          {/* feed list */}
          <FeedList feeds={feeds} setCurrentFeedId={setCurrentFeedId} />
        </div>
        <div className="w-4/5 py-4">
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
