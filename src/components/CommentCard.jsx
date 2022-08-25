const CommentCard = ({ comment }) => {
  return (
    <section className="comment-card">
      <h4 className="comment-author">{comment.author}</h4>
      <div className="comment-body">{comment.body}</div>
      <div className="comment-vote-count">Votes: {comment.votes}</div>
    </section>
  );
};

export default CommentCard;
