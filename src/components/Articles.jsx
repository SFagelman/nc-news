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
        })}
      </ul>
    </>
  );
};

export default Articles;
