import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import SortBy from "./SortBy";

const Articles = ({ articles, setArticles }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [setArticles]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <SortBy articles={articles} setArticles={setArticles} />
        <ul className="article-list-container">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </>
    );
  }
};

export default Articles;
