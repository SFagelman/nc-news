const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <h4 className="article-author">written by: {article.author}</h4>
      <div className="article-vote-count">Votes: {article.votes}</div>
      <div className="article-comment-count">
        Comments: {article.comment_count}
        <button>View Comments</button>
      </div>
    </section>
  );
};

export default ArticleCard;
