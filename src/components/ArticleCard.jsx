const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <article className="article-body">{article.body}</article>
    </section>
  );
};

export default ArticleCard;
