import { get, create, err, update, edit, del } from "./companiesTypeFunctions";
import api from "../../utils/api";
import { BrowserRouter } from "react-router-dom";

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
      return dispatch(err(error.response.data.errors.name[0]));
      // throw error;
    }
  };
};

export const editCompany = (id, data) => {
  //console.log(id, data, 54);
  return async dispatch => {
    try {
      let response = await api.editCompanies(id, data);
      dispatch(edit(response));
      // return (window.location.pathname = "companies");
    } catch (error) {
      console.log("error", error.response.data.errors.name[0]);
      return dispatch(err(error.response.data.errors.name[0]));
      // throw error;
    }
  };
};

export const getCompany = id => {
  return async dispatch => {
    try {
      let response = await api.getCompany(id);
      // console.log("ddd", response);
      return dispatch(update(response));
    } catch (error) {
      // return dispatch(err(error.response.data.errors.name[0]));
      // throw error;
    }
  };
};

export const delCompany = id => {
  return async dispatch => {
    try {
      let response = await api.delCompany(id);
      // console.log("ddd", response);
      return dispatch(del(response, id));
    } catch (error) {
      // return dispatch(err(error.response.data.errors.name[0]));
      // throw error;
    }
  };
};

/*
export const createPost = ({ title, body }) => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/add`, { title, body })
      .then(response => {
        dispatch(createPostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  };
};

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deletePostSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};


*/
