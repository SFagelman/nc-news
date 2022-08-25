import { useState, useContext } from "react";
import { addCommentByArticle } from "../api";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ article_id }) => {
  const { loggedInUser } = useContext(UserContext);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentByArticle(article_id, loggedInUser.username, newComment);
    setNewComment("");
    let commentInput = document.getElementById("new-comment-textbox");
    commentInput.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="textbox"
        id="new-comment-textbox"
        cols="30"
        rows="3"
        placeholder="Add comment..."
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddComment;
