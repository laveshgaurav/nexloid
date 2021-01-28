import { nexloid as actionType } from "../actions/actionTypes";

const InitialState = {
  allArticles: [],
  latestArticles: [],
  openedArticle: [],
  relatedArticles: [],
  allWorks: [],
  latestWorks: [],
  openedWork: [],
  relatedWorks: [],
  openedService: [],
  allServices: [],
  allCareers: [],
  isLoading: true,
  contactUs: false,
  careerForm: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = InitialState, { type, payload }) => {
  switch (type) {
    case actionType.CLEAR_OPENED_SERVICE : {
      return {
        ...state,
        openedService: payload
      }
    }
    // blogs here
    case actionType.FETCH_ALL_ARTICLES: {
      return {
        ...state,
        allArticles: payload,
      };
    }
    case actionType.TOGGLE_CONTACT_US: {
      return {
        ...state,
        contactUs: !state.contactUs,
      };
    }
    case actionType.TOGGLE_CAREER_FORM: {
      return {
        ...state,
        careerForm: !state.careerForm,
      };
    }

    case actionType.FETCH_LATEST_ARTICLES: {
      return {
        ...state,
        latestArticles: payload,
      };
    }

    case actionType.FETCH_AN_ARTICLE: {
      return {
        ...state,
        openedArticle: payload,
      };
    }

    case actionType.FETCH_RELATED_ARTICLES: {
      return {
        ...state,
        relatedArticles: payload,
      };
    }

    case actionType.FETCH_RELATED_WORKS: {
      return {
        ...state,
        relatedWorks: payload,
      };
    }

    case actionType.FETCH_LATEST_WORKS: {
      return {
        ...state,
        latestWorks: payload,
      };
    }

    case actionType.FETCH_A_WORK: {
      return {
        ...state,
        openedWork: payload,
      };
    }

    case actionType.FETCH_ALL_WORKS: {
      return {
        ...state,
        allWorks: payload,
      };
    }

    case actionType.FETCH_ALL_SERVICES: {
      return {
        ...state,
        allServices: payload,
      };
    }

    case actionType.FETCH_SERVICE_DETAILS: {
      return {
        ...state,
        openedService: payload,
      };
    }

    case actionType.FETCH_CAREERS: {
      return {
        ...state,
        allCareers: payload,
      };
    }

    case actionType.APP_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default:
      return state;
  }
};
