import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchArticleByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";

const Topics = ({ articles, setArticles }) => {
  const { topic } = useParams();

  useEffect(() => {
    fetchArticleByTopic(topic).then((res) => {
      setArticles(res);
    });
  }, [topic, setArticles]);

  return (
    <>
      <SortBy topic={topic} articles={articles} setArticles={setArticles} />
      <ul className="article-list-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Topics;
