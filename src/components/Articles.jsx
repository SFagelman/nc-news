import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import SortBy from "../components/SortBy";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <>
      <ul className="article-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}{" "}
        padding-left: 10px; padding-right: 10px; padding-bottom: 10px;
      </ul>
    </>
  );
};

export default Articles;
