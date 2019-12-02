import { getCompany } from "../../actions/companies";
import { editCompany } from "../../actions/companies";

export const mapStateToProps = state => {
  return {
    company: state.companies.companyData,
    success: state.companies.success,
    errors: state.companies.errors
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCompany: id => dispatch(getCompany(id)),
    editCompany: (id, posts) => dispatch(editCompany(id, posts))
  };
};
