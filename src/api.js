import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://sf-backend-project.herokuapp.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`https://sf-backend-project.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const fetchArticleByTopic = (topic) => {
  return axios
    .get(`https://sf-backend-project.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const patchArticle = (article_id, change) => {
  return axios
    .patch(
      `https://sf-backend-project.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: change }
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchCommentsByArticle = (article_id) => {
  return axios
    .get(
      `https://sf-backend-project.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

export const addCommentByArticle = (article_id, username, comment_text) => {
  return axios
    .post(
      `https://sf-backend-project.herokuapp.com/api/articles/${article_id}/comments`,
      { username: username, body: comment_text }
    )
    .then(({ data }) => {
      return data.comments;
    });
};

// "axios config objects" for complex queries in api calls - https://masteringjs.io/tutorials/axios/get-query-params
