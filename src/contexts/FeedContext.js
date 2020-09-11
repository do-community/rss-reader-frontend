import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://google-reader-clone-lay2v.ondigitalocean.app";

const FeedContext = createContext();
export const useFeeds = () => useContext(FeedContext);

export function FeedProvider({ children }) {
  const [currentFeedId, setCurrentFeedId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [articles, setArticles] = useState([]);

  const getArticles = useCallback(() => {
    let url = `${apiUrl}/articles/`;
    if (currentFeedId) url += `?feed=${currentFeedId}`;
    fetch(url)
      .then((res) => res.json())
      .then(setArticles);
  }, [currentFeedId]);

  function addFeed(url) {
    // parse the name from the url
    const parsedUrl = new URL(url);
    const { hostname } = parsedUrl;

    fetch(`${apiUrl}/feeds`, {
      method: "POST",
      body: JSON.stringify({ name: hostname, url }),
    })
      .then((res) => res.json())
      .then(setFeeds);
  }

  // get feeds
  useEffect(() => {
    fetch(`${apiUrl}/feeds/`)
      .then((res) => res.json())
      .then(setFeeds);
  }, []);

  // get articles
  useEffect(() => {
    getArticles();
  }, [getArticles, currentFeedId]);

  return (
    <FeedContext.Provider
      value={{
        feeds,
        articles,
        chooseFeed: (id) => setCurrentFeedId(id),
        addFeed,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}
