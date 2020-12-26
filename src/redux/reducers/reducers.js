import { nexloid as actionType } from '../actions/actionTypes';

const InitialState = {
  allArticles: [],
  latestArticles: [],
  openedArticle: [],
  relatedArticles: [],
  allCaseStudies: [],
  latestCaseStudies: [],
  openedCaseStudy: [],
  isLoading: true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = InitialState, {type, payload}) => {
  switch(type) {
    // blogs here
    case actionType.FETCH_ALL_ARTICLES : {
      return {
        ...state,
        allArticles: payload
      }
    }

    case actionType.FETCH_LATEST_ARTICLES : {
      return {
        ...state,
        latestArticles: payload
      }
    }

    case actionType.FETCH_AN_ARTICLE : {
      return {
        ...state,
        openedArticle: payload
      }
    }

    case actionType.APP_LOADING : {
      return {
        ...state,
        isLoading: payload
      }
    }

    default: return state;
  }
}