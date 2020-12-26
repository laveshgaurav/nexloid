import { nexloid as actionType } from './actionTypes';
import ExternalServices from '../../services/externalServices';

export const fetchLatestArticles = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getLatestArticles();
  dispatch({
    type: actionType.FETCH_LATEST_ARTICLES,
    payload: articles
  });
};

export const fetchAllArticles = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getAllArticles();
  dispatch({
    type: actionType.FETCH_ALL_ARTICLES,
    payload: articles
  });
};

export const fetchArticleById = (articleId) => async(dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getArticleById(articleId);
  dispatch({
    type: actionType.FETCH_AN_ARTICLE,
    payload: articles
  });
};