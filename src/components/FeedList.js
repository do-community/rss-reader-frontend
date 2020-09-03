import React from "react";

export default function FeedList({ feeds, setCurrentFeedId }) {
  return (
    <>
      {feeds.map((feed) => (
        <div key={feed.id}>
          <button
            className="block w-full text-left py-1 text-gray-700 hover:text-gray-900"
            onClick={() => setCurrentFeedId(feed.id)}
          >
            {feed.name}
          </button>
        </div>
      ))}
    </>
  );
}
