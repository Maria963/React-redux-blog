import { getAllCompanies } from "../actions/companies";

export const mapStateToProps = state => {
  return {
    companies: state.companies.data
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCompanies: dispatch(getAllCompanies())
  };
};
