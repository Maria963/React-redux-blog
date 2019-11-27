import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY,
  FAILED
} from "../types/companies";

const initialState = {
  data: [],
  error: null,
  isLoading: true
};

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, data: action.payload };
    /*  case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST:
      return action.posts;*/
    case CREATE_COMPANY:
      return { ...state, error: action.payload };
    case FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
