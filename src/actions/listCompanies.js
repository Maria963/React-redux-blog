import Api from "../utils/api/";

export function loadCompanies() {
  return function(dispatch) {
    return Api.getCompanies()()
      .then(companies => {
        dispatch(loadCompaniesSuccess(companies));
      })
      .catch(error => {
        throw error;
      });
  };
}
