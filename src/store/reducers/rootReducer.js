import { combineReducers } from "redux";
import companies from "./companiesReducer";
import employees from "./employeesReducer";

export default combineReducers({
  companies,
  employees
});
