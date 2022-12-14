import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSingleArticle, patchArticle } from "../api";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [votingError, setVotingError] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  const showComments = () => {
    if (commentsVisible === true) {
      setCommentsVisible(false);
    } else {
      setCommentsVisible(true);
    }
  };

  const updateVote = (change) => {
    setOptimisticVotes((currOptimisticVotes) => {
      setVotingError(false);
      return currOptimisticVotes + change;
    });
    patchArticle(article.article_id, change).catch(() => {
      setVotingError(true);
      setOptimisticVotes((currOptimisticVotes) => {
        return currOptimisticVotes - 1;
      });
    });
  };

  return (
    <>
      <hr className="line" />
      <div className="single-article-container">
        <section className="single-article-header">
          <h2 className="single-article-title">{article.title}</h2>
          <h5 className="single-article-author">
            written by: {article.author}
          </h5>
          <h5 className="single-article-topic">Topic: {article.topic}</h5>
        </section>

        <article className="single-article-body">{article.body}</article>
        <hr className="line" />

        <section className="vote-comment-footer">
          <div className="voting-container">
            <p className="single-article-vote-count">
              Votes: {article.votes + optimisticVotes}
            </p>
            {votingError && <p>Vote not counted</p>}
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
          </div>

          <button
            className="single-article-comment-count"
            onClick={() => {
              showComments();
            }}
          >
            {commentsVisible ? "Hide Comments" : "View Comments"}
          </button>
        </section>
        <AddComment
          article_id={article.article_id}
          setCommentSubmitted={setCommentSubmitted}
        />
        {commentsVisible && (
          <CommentsList
            article_id={article.article_id}
            commentSubmitted={commentSubmitted}
            setCommentSubmitted={setCommentSubmitted}
          />
        )}
      </div>
    </>
  );
};

export default SingleArticle;
