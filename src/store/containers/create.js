import { createCompany } from "../actions/companies";

export const mapStateToProps = state => {
  return {
    errors: state.companies.error,
    success: state.companies.success,
    response: state.companies.response
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    createCompanies: posts => dispatch(createCompany(posts))
  };
};
