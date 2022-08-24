import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle, patchArticle } from "../api";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  const updateVote = (change) => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + change;
    });
    patchArticle(article.article_id, change).catch(() => {
      alert("Error - vote not added");
      setOptimisticVotes((currOptimisticVotes) => {
        return currOptimisticVotes - 1;
      });
    });
  };

  return (
    <>
      <section className="single-article-header">
        <h2 className="single-article-title">{article.title}</h2>
        <h4 className="single-article-author">written by: {article.author}</h4>
        <h5 className="single-article-topic">Topic: {article.topic}</h5>
      </section>

      <article className="single-article-body">{article.body}</article>

      <section className="vote-comment-footer">
        <div className="single-article-vote-count">
          Votes: {article.votes + optimisticVotes}
        </div>
        <button
          className="vote-up-button"
          onClick={() => {
            updateVote(1);
          }}
        >
          <HiArrowUp />
        </button>
        <button
          className="vote-down-button"
          onClick={() => {
            updateVote(-1);
          }}
        >
          <HiArrowDown />
        </button>
        <div className="single-article-comment-count">
          Comments: {article.comment_count}
        </div>
      </section>
    </>
  );
};

export default SingleArticle;
