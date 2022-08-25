import { useState, useEffect } from "react";
import { fetchCommentsByArticle } from "../api";
import CommentCard from "../components/CommentCard";

const CommentsList = ({
  article_id,
  commentSubmitted,
  setCommentSubmitted,
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setCommentSubmitted(false);
    fetchCommentsByArticle(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id, commentSubmitted]);

  return (
    <>
      <ul className="comment-list-container">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </>
  );
};
export default CommentsList;
