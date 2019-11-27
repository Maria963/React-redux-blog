import { get, create, err } from "./companiesTypeFunctions";
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
  console.log("u");
  return async dispatch => {
    console.log("lll");
    try {
      console.log("nnn");
      let response = await api.createCompanies(data);
      console.log(response);
      return dispatch(create(response));
    } catch (error) {
      console.log("dddd", error.response.data.errors.name);
      return dispatch(err(error.response.data.errors.name[0]));
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
