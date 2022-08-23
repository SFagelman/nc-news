import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const NavBar = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="navbar-container">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/articles">Articles</Link>
      </nav>
      <div className="user-container">
        <div>Current user: {loggedInUser.username}</div>
        <img
          className="user-avatar"
          src={loggedInUser.avatar_url}
          alt="avatar"
        />
      </div>
    </section>
  );
};

export default NavBar;
