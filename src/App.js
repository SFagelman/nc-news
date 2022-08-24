import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/articles"
              element={
                <Articles articles={articles} setArticles={setArticles} />
              }
            />
            <Route
              path="/topics/:topic/articles"
              element={<Topics articles={articles} setArticles={setArticles} />}
            />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
