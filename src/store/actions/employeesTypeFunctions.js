import {
  GET_EMPLOYEES,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  GET_EMPLOYEE
} from "../types/employees";

export const get = data => {
  return {
    type: GET_EMPLOYEES,
    payload: data
  };
};

export const update = data => {
  return {
    type: GET_EMPLOYEE,
    payload: data
  };
};

export const create = data => {
  return {
    type: CREATE_EMPLOYEE,
    payload: data
  };
};

export const errCreate = error => {
  return {
    type: CREATE_EMPLOYEE,
    payload: error
  };
};

export const edit = success => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: success
  };
};

export const err = error => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: error
  };
};

export const delEmployees = id => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id
  };
};
