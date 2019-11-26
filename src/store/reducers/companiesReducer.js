import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY
} from "../types/companies";

const initialState = {
  data: [],
  error: null,
  isLoading: true
};

export default function companiesReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, data: action.payload };
    /*  case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
    case FETCH_POST:
      return action.posts;*/
    default:
      return state;
  }
}
