import {
  fetchArticleBySortQuery,
  fetchArticleByTopicAndSortQuery,
} from "../api";
import { useState } from "react";

const SortBy = ({ topic, articles, setArticles }) => {
  const [chosenSort, setChosenSort] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!topic) {
      fetchArticleBySortQuery(chosenSort).then((res) => {
        setArticles(res);
      });
    } else {
      fetchArticleByTopicAndSortQuery(chosenSort, topic).then((res) => {
        setArticles(res);
      });
    }
  };

  const handleChange = (event) => {
    setChosenSort(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="sortBys">Sort By: </label>
      <select
        onChange={handleChange}
        name="sortBys"
        id="sortBys"
        value={chosenSort}
      >
        <option value="title&order=ASC">Title: A-Z</option>
        <option value="title&order=DESC">Title: Z-A</option>
        <option value="topic&order=ASC">Topic: A-Z</option>
        <option value="topic&order=DESC">Topic: Z-A</option>
        <option value="author&order=ASC">Author: A-Z</option>
        <option value="author&order=DESC">Author: Z-A</option>
        <option value="body&order=ASC">Body: A-Z</option>
        <option value="body&order=DESC">Body: Z-A</option>
        <option value="created_at&order=ASC">Date Created: Old-New</option>
        <option value="created_at&order=DESC">Date Created: New-Old</option>
        <option value="votes&order=ASC">Votes: High-Low</option>
        <option value="votes&order=DESC">Votes: High-Low</option>
      </select>
      <input type="submit" value="Sort" />
    </form>
  );
};

export default SortBy;
