import { combineReducers } from "redux";
import companies from "./companyReducer";

const rootReducer = combineReducers({
  // short hand property names
  companies
});

export default rootReducer;
