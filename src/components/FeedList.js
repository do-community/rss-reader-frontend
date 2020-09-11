import React from "react";
import { useFeeds } from "../contexts/FeedContext";

export default function FeedList() {
  const { feeds, chooseFeed } = useFeeds();

  return (
    <>
      {feeds.map((feed) => (
        <div key={feed.id}>
          <button
            className="block w-full text-left py-2 text-gray-600 hover:text-gray-900 outline-none focus:outline-none"
            onClick={() => chooseFeed(feed.id)}
          >
            {feed.name}
          </button>
        </div>
      ))}
    </>
  );
}
