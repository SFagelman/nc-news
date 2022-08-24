import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle } from "../api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  return (
    <>
      <section className="single-article-header">
        <h2 className="single-article-title">{article.title}</h2>
        <h4 className="single-article-author">written by: {article.author}</h4>
        <h5 className="single-article-topic">Topic: {article.topic}</h5>
      </section>

      <article className="single-article-body">{article.body}</article>

      <section className="vote-comment-footer">
        <div className="single-article-vote-count">Votes: {article.votes}</div>
        <div className="single-article-comment-count">
          Comments: {article.comment_count}
        </div>
      </section>
    </>
  );
};

export default SingleArticle;
