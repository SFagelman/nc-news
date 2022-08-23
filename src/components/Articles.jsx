import { fetchArticles } from "../api";
import { useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import SortBy from "../components/SortBy";

const Articles = ({ articles, setArticles }) => {
  useEffect(() => {
    fetchArticles().then((res) => {
      setArticles(res);
    });
  }, [setArticles]);

  return (
    <>
      <SortBy />
      <ul className="article-list-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
