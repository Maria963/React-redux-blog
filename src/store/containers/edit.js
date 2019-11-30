import { getCompany } from "../actions/companies";
import { editCompany } from "../actions/companies";

export const mapStateToProps = state => {
  return {
    company: state.companies.companyData,
    update: state.companies.update,
    error: state.companies.response
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCompany: id => dispatch(getCompany(id)),
    editCompany: (id, posts) => dispatch(editCompany(id, posts))
  };
};
