import { createCompany } from "../../actions/companies";

export const mapStateToProps = state => {
  return {
    errors: state.companies.errors,
    success: state.companies.success
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    createCompanies: posts => dispatch(createCompany(posts))
  };
};
