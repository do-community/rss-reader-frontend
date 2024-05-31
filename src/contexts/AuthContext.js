import React, { useContext, createContext, useState, useEffect } from "react";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://google-reader-clone-lay2v.ondigitalocean.app/api";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  function login(username, password) {
    console.log(username, password, ${apiUrl});
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("sammy_token", data.token);
      });
  }

  function logout() {
    localStorage.removeItem("sammy_token");
  }

  // check localstorage for the token
  useEffect(() => {
    const storedToken = localStorage.getItem("sammy_token");
    if (!storedToken) return;
    setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
