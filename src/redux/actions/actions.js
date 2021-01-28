import { nexloid as actionType } from "./actionTypes";
import ExternalServices from "../../services/externalServices";

export const fetchLatestArticles = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const articles = await ExternalServices.getLatestArticles();
  dispatch({
    type: actionType.FETCH_LATEST_ARTICLES,
    payload: articles,
  });
  await dispatch(initLoader(false));
};

export const toggleContactUs = () => (dispatch) => {
  dispatch({
    type: actionType.TOGGLE_CONTACT_US,
  });
};
export const toggleCareerForm = () => (dispatch) => {
  dispatch({
    type: actionType.TOGGLE_CAREER_FORM,
  });
};
export const fetchAllArticles = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const articles = await ExternalServices.getAllArticles();
  dispatch({
    type: actionType.FETCH_ALL_ARTICLES,
    payload: articles,
  });
  await dispatch(initLoader(false));
};

export const fetchArticleById = (articleId) => async (dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getArticleById(articleId);
  dispatch({
    type: actionType.FETCH_AN_ARTICLE,
    payload: articles,
  });
};

export const fetchRelatedArticles = (tags, articleId) => async (dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getRelatedArticlesByTag(
    tags,
    articleId
  );
  dispatch({
    type: actionType.FETCH_RELATED_ARTICLES,
    payload: articles,
  });
  // await dispatch(initLoader(false));
};

export const fetchRelatedWorks = (tags) => async (dispatch) => {
  // await dispatch(initLoader(true));
  const articles = await ExternalServices.getRelatedWorksByTag(tags);
  dispatch({
    type: actionType.FETCH_RELATED_WORKS,
    payload: articles,
  });
  console.log("related_works", articles);
  // await dispatch(initLoader(false));
};

// works/case studies
export const fetchLatestWorks = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const works = await ExternalServices.getLatestWorks();
  dispatch({
    type: actionType.FETCH_LATEST_WORKS,
    payload: works,
  });
  await dispatch(initLoader(false));
};

export const fetchAllWorks = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const works = await ExternalServices.getAllWorks();
  dispatch({
    type: actionType.FETCH_ALL_WORKS,
    payload: works,
  });
  await dispatch(initLoader(false));
};

export const fetchWorkById = (id) => async (dispatch) => {
  // await dispatch(initLoader(true));
  const works = await ExternalServices.getWorkById(id);
  dispatch({
    type: actionType.FETCH_A_WORK,
    payload: works,
  });
  // await dispatch(initLoader(false));
};

// services
export const fetchServiceDetails = (serviceId) => async (dispatch) => {
  // await dispatch(initLoader(true));
  await dispatch(clearService());
  const details = await ExternalServices.getServiceById(serviceId);
  // console.log(details);
  dispatch({
    type: actionType.FETCH_SERVICE_DETAILS,
    payload: details,
  });

  await dispatch(fetchRelatedWorks(details[0].tags));
  // await dispatch(initLoader(false));
};

export const fetchAllServices = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const services = await ExternalServices.getAllServices();
  dispatch({
    type: actionType.FETCH_ALL_SERVICES,
    payload: services,
  });
  await dispatch(initLoader(false));
};

export const fetchAllCareers = () => async (dispatch) => {
  await dispatch(initLoader(true));
  const careers = await ExternalServices.getAllCareers();
  dispatch({
    type: actionType.FETCH_CAREERS,
    payload: careers,
  });
  await dispatch(initLoader(false));
};


export const initLoader = (status) => async (dispatch) => {
  dispatch({
    type: actionType.APP_LOADING,
    payload: status
  });
}

export const clearService = () => async (dispatch) => {
  dispatch({
    type: actionType.CLEAR_OPENED_SERVICE,
    payload: []
  });
}