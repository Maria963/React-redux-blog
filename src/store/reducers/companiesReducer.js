import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY,
  GET_COMPANY,
  FAILED
} from "../types/companies";

const initialState = {
  companyData: [],
  data: [],
  error: null,
  isLoading: true
};

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, data: action.payload };
    case CREATE_COMPANY:
      return { ...state, success: action.payload.status };
    case GET_COMPANY:
      return { ...state, companyData: action.payload };
    case UPDATE_COMPANY:
      return { ...state, update: action.payload };
    case DELETE_COMPANY:
      const newData = state.data.filter(
        company => company.id !== action.payload.id
      );
      return { ...state, data: newData, del: action.payload };
    default:
      return state;
  }
}
