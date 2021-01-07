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

export const fetchRelatedArticles = (tags, articleId) => async(dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getRelatedArticlesByTag(tags, articleId);
  dispatch({
    type: actionType.FETCH_RELATED_ARTICLES,
    payload: articles
  });
};

// works/case studies
export const fetchLatestWorks = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const works = await ExternalServices.getLatestWorks();
  dispatch({
    type: actionType.FETCH_LATEST_WORKS,
    payload: works
  });
};

export const fetchAllWorks = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const works = await ExternalServices.getAllWorks();
  dispatch({
    type: actionType.FETCH_ALL_WORKS,
    payload: works
  });
};

export const fetchWorkById = (id) => async(dispatch) => {
  // await dispatch(initLoader(true));
  const works = await ExternalServices.getWorkById(id);
  dispatch({
    type: actionType.FETCH_A_WORK,
    payload: works
  });
};

// services
export const fetchServiceDetails = (serviceId) => async(dispatch) => {
  const details = await ExternalServices.getServiceById(serviceId);
  // console.log(details);
  dispatch({
    type: actionType.FETCH_SERVICE_DETAILS,
    payload: details
  });
};

export const fetchAllServices = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const services = await ExternalServices.getAllServices();
  dispatch({
    type: actionType.FETCH_ALL_SERVICES,
    payload: services
  });
};

export const fetchAllCareers = () => async(dispatch) => {
  // await dispatch(initLoader(true));
  const careers = await ExternalServices.getAllCareers();
  dispatch({
    type: actionType.FETCH_CAREERS,
    payload: careers
  });
};