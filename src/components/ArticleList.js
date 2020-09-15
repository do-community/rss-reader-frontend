import React, { useState } from "react";
import Timestamp from "react-timestamp";
import { useFeeds } from "../contexts/FeedContext";
import link from "../link.svg";

export default function ArticleList() {
  const { articles } = useFeeds();

  return (
    <>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </>
  );
}

function Article({ article }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 hover:bg-gray-100">
      {/* row in article list to click */}
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        key={article.id}
        className={`w-full lg:flex lg:items-center text-left p-4 outline-none focus:outline-none ${
          isOpen ? "bg-gray-200" : ""
        }`}
      >
        <a className="hidden lg:block w-1/6 text-gray-500 mr-6">
          {article.feed_name}
        </a>
        <span className="block font-bold flex-grow">{article.title}</span>

        <Timestamp date={article.date} className="text-gray-500 ml-auto" />
      </button>

      {isOpen && (
        <div className="p-10">
          <div className="mb-12 flex justify-between items-center">
            <h2 className="text-5xl font-bold text-gray-900 hover:underline hover:text-blue-800 transition duration-200">
              <a href={article.link} alt={article.title}>
                {article.title}
              </a>
            </h2>

            <div>
              <a
                href={article.link}
                alt={article.title}
                className="opacity-50 hover:opacity:75 transition duration-200"
              >
                <img src={link} alt="View Article" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.summary }}
          />
        </div>
      )}
    </div>
  );
}
