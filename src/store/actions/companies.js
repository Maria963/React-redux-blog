import {
  GET_COMPANIES,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  CREATE_COMPANY
} from "../types/companies";
import api from "../../utils/api";

const apiUrl = "http://127.0.0.1:8000/api/companies";

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

const get = data => {
  return {
    type: GET_COMPANIES,
    payload: data
  };
};

const create = data => {
  return {
    type: CREATE_COMPANIES,
    payload: data
  };
};

export const getAllCompanies = () => {
  return dispatch => {
    return api
      .getCompanies()
      .then(response => {
        dispatch(get(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createCompany = data => {
  return dispatch => {
    return api
      .createCompanies(data)
      .then(response => {
        dispatch(create(response));
      })
      .catch(error => {
        throw error;
      });
  };
};
