import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://sf-backend-project.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};
