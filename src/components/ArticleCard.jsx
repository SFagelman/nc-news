import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <Link className="article-title" to={`/articles/${article.article_id}`}>
        {article.title}
      </Link>
      <h4 className="article-author">written by: {article.author}</h4>
      <div className="article-vote-count">Votes: {article.votes}</div>
      <div className="article-comment-count">
        Comments: {article.comment_count}
      </div>
    </section>
  );
};

export default ArticleCard;
