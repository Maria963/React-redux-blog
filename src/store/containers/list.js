import {
  getAllCompanies,
  createCompany,
  editCompany,
  delCompany
} from "../actions/companies";

export const mapStateToProps = state => {
  return {
    companies: state.companies.data,
    success: state.companies.success,
    update: state.companies.update,
    del: state.companies.del
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCompanies: dispatch(getAllCompanies()),
    createCompanies: posts => dispatch(createCompany(posts)),
    editCompany: (id, posts) => dispatch(editCompany(id, posts)),
    delCompany: id => dispatch(delCompany(id))
  };
};
