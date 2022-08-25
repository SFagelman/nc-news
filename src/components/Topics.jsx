import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchArticleByTopic } from "../api";
import ArticleCard from "./ArticleCard";

const Topics = ({ articles, setArticles }) => {
  const { topic } = useParams();

  useEffect(() => {
    fetchArticleByTopic(topic).then((res) => {
      setArticles(res);
    });
  }, [topic, setArticles]);

  return (
    <>
      <ul className="article-list-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Topics;
