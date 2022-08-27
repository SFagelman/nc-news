import { Link } from "react-router-dom";

const TopicFilter = () => {
  return (
    <div className="topic-container">
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

export default TopicFilter;
