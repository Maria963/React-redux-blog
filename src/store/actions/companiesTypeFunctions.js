import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY,
  FAILED
} from "../types/companies";

export const get = data => {
  return {
    type: GET_COMPANIES,
    payload: data
  };
};

export const create = data => {
  return {
    type: CREATE_COMPANY,
    payload: data
  };
};

export const err = error => {
  return {
    type: FAILED,
    error
  };
};
