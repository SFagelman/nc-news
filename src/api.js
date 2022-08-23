import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://sf-backend-project.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleByTopic = (topic) => {
  return axios
    .get(`https://sf-backend-project.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data.articles;
    });
};

// "axios config objects" for complex queries in api calls - https://masteringjs.io/tutorials/axios/get-query-params
