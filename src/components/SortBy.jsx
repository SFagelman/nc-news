import { Link } from "react-router-dom";

const SortBy = () => {
  return (
    <div className="sort-by-container">
      <h4>Topics: </h4>
      <Link className="topic-link" to="/topics/coding/articles">
        Coding
      </Link>
      <Link className="topic-link" to="/topics/cooking/articles">
        Cooking
      </Link>
      <Link className="topic-link" to="/topics/football/articles">
        Football
      </Link>
    </div>
  );
};

export default SortBy;
