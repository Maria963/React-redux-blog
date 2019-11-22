import * as types from "./actionTypes";
import Api from "../util/api";

export function loadCompaniesSuccess(companies) {
  return { type: "LOAD_COMPANIES_SUCCESS", companies };
}
