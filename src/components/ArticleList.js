import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { useFeeds } from "../contexts/FeedContext";

export default function ArticleList() {
  const { articles } = useFeeds();

  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
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
        className={`w-full lg:flex lg:items-center text-left p-3 text-sm ${
          isOpen ? "bg-gray-200" : ""
        }`}
      >
        <span className="hidden lg:block text-gray-500 mr-6">
          {article.feed_name}
        </span>
        <span className="block font-bold">{article.title}</span>

        <ReactTimeAgo date={article.date} className="text-gray-500 ml-auto" />
      </button>

      {isOpen && (
        <div className="p-10 prose">
          <h2>{article.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: article.summary }} />
        </div>
      )}
    </div>
  );
}
