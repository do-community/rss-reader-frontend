import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://google-reader-clone-lay2v.ondigitalocean.app/api";

const FeedContext = createContext();
export const useFeeds = () => useContext(FeedContext);

export function FeedProvider({ children }) {
  const [currentFeedId, setCurrentFeedId] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [articles, setArticles] = useState([]);

  const getFeeds = useCallback(() => {
    fetch(`${apiUrl}/feeds/`)
      .then((res) => res.json())
      .then(setFeeds);
  }, []);

  // get feeds
  useEffect(() => {
    getFeeds();
  }, [getFeeds]);

  // get articles
  useEffect(() => {
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

    const token = localStorage.getItem("sammy_token");
    if (!token) return;

    fetch(`${apiUrl}/feeds/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ name: hostname, url }),
    })
      .then((res) => res.json())
      .then(getFeeds);
  }

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
