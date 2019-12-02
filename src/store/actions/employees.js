import {
  get,
  create,
  err,
  update,
  edit,
  delEmployees,
  errCreate
} from "./employeesTypeFunctions";
import api from "../../utils/api";

export const getAllEmployees = () => {
  return async dispatch => {
    try {
      let response = await api.getEmployees();
      return dispatch(get(response.data));
    } catch (error) {
      throw error;
    }
  };
};

export const createEmployee = data => {
  return async dispatch => {
    try {
      let response = await api.createEmployees(data);
      return dispatch(create(response));
    } catch (error) {
      return dispatch(errCreate(error.response.data.errors));
    }
  };
};

export const editEmployee = (id, data) => {
  return async dispatch => {
    try {
      let response = await api.editEmployee(id, data);

      return dispatch(edit(response));
    } catch (error) {
      return dispatch(err(error.response.data.errors));
    }
  };
};

export const getEmployee = id => {
  return async dispatch => {
    try {
      let response = await api.getEmployee(id);

      return dispatch(update(response));
    } catch (error) {
      throw error;
    }
  };
};

export const delEmployee = id => {
  return async dispatch => {
    try {
      await api.delEmployee(id);
      return dispatch(delEmployees(id));
    } catch (error) {
      throw error;
    }
  };
};
