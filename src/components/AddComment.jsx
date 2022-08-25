import { useState, useContext } from "react";
import { addCommentByArticle } from "../api";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ article_id, setCommentSubmitted }) => {
  const { loggedInUser } = useContext(UserContext);

  const [commentSubmitError, setCommentSubmitError] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [addedCommentAlert, setAddedCommentAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment !== "") {
      addCommentByArticle(article_id, loggedInUser.username, newComment)
        .then(() => {
          setCommentSubmitError(false);
          setAddedCommentAlert(true);
          setNewComment("");
          setCommentSubmitted(true);
        })
        .catch(() => {
          setCommentSubmitError(true);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="textbox"
        id="new-comment-textbox"
        cols="30"
        rows="3"
        placeholder="Add comment..."
        value={newComment}
        onChange={(event) => {
          setAddedCommentAlert(false);
          setNewComment(event.target.value);
        }}
      ></textarea>
      <input type="submit" value="Submit" />
      {commentSubmitError && <p>Comment could not be submitted</p>}
      {addedCommentAlert && <p>Comment added</p>}
    </form>
  );
};

export default AddComment;

// feedback if comments are hidden and new comment added
// feedback if post fails
