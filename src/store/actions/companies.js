import {
  get,
  create,
  err,
  update,
  edit,
  delCompanies,
  errCreate,
  delCompanyEmployee
} from "./companiesTypeFunctions";
import api from "../../utils/api";

export const getAllCompanies = () => {
  return async dispatch => {
    try {
      let response = await api.getCompanies();
      return dispatch(get(response.data));
    } catch (error) {
      throw error;
    }
  };
};

export const createCompany = data => {
  return async dispatch => {
    try {
      let response = await api.createCompanies(data);

      return dispatch(create(response));
    } catch (error) {
      return dispatch(errCreate(error.response.data.errors.name[0]));
    }
  };
};

export const editCompany = (id, data) => {
  return async dispatch => {
    try {
      let response = await api.editCompanies(id, data);
      dispatch(edit(response));
      // return (window.location.pathname = "companies");
    } catch (error) {
      return dispatch(err(error.response.data.errors.name[0]));
      // throw error;
    }
  };
};

export const getCompany = id => {
  return async dispatch => {
    try {
      let response = await api.getCompany(id);

      return dispatch(update(response));
    } catch (error) {
      throw error;
    }
  };
};

export const delCompany = id => {
  return async dispatch => {
    try {
      await api.delCompany(id);

      dispatch(delCompanies(id));
      dispatch(delCompanyEmployee(id));
    } catch (error) {
      throw error;
    }
  };
};
