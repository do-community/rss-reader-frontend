import React from "react";
import { useFeeds } from "../contexts/FeedContext";

export default function FeedList() {
  const { feeds, setCurrentFeedId } = useFeeds();

  return (
    <>
      {feeds.map((feed) => (
        <div key={feed.id}>
          <button
            className="block w-full text-left py-2 text-gray-600 hover:text-gray-900"
            onClick={() => setCurrentFeedId(feed.id)}
          >
            {feed.name}
          </button>
        </div>
      ))}
    </>
  );
}
