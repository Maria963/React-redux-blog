import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEE,
  DELETE_COMPANY_EMPLOYEES
} from "../types/employees";

const initialState = {
  employeeData: [],
  data: [],
  errors: null,
  success: null
};

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, data: action.payload };
    case CREATE_EMPLOYEE:
      return {
        ...state,
        success: action.payload.status,
        errors: action.payload
      };
    case GET_EMPLOYEE:
      return { ...state, employeeData: action.payload };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        success: action.payload.status,
        errors: action.payload
      };
    case DELETE_EMPLOYEE:
      const newData = state.data.filter(
        employee => employee.id !== action.payload
      );
      return { ...state, data: newData, del: action.payload };
    case DELETE_COMPANY_EMPLOYEES:
      const newData11 = state.data.filter(
        employee => employee.company_id !== action.payload
      );
      return { ...state, data: newData11, del: action.payload };
    default:
      return state;
  }
}
