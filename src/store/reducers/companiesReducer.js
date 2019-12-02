import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY,
  GET_COMPANY
} from "../types/companies";

const initialState = {
  companyData: [],
  data: [],
  errors: null,
  success: null
};

export default function companiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, data: action.payload };
    case CREATE_COMPANY:
      return {
        ...state,
        success: action.payload.status,
        errors: action.payload
      };
    case GET_COMPANY:
      return { ...state, companyData: action.payload };
    case UPDATE_COMPANY:
      return {
        ...state,
        success: action.payload.status,
        errors: action.payload
      };
    case DELETE_COMPANY:
      const newData = state.data.filter(
        company => company.id !== action.payload
      );

      return { ...state, data: newData, del: action.payload };
    default:
      return state;
  }
}
