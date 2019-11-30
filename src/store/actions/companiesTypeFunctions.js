import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY,
  GET_COMPANY,
  FAILED
} from "../types/companies";

export const get = data => {
  return {
    type: GET_COMPANIES,
    payload: data
  };
};

export const update = data => {
  return {
    type: GET_COMPANY,
    payload: data
  };
};

export const create = data => {
  return {
    type: CREATE_COMPANY,
    payload: data
  };
};

export const edit = success => {
  return {
    type: UPDATE_COMPANY,
    payload: success
  };
};

export const err = error => {
  return {
    type: UPDATE_COMPANY,
    payload: error
  };
};

export const del = (data, id) => {
  return {
    type: DELETE_COMPANY,
    payload: { data, id }
  };
};
