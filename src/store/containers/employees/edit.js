import { getEmployee, editEmployee } from "../../actions/employees";
import { getAllCompanies } from "../../actions/companies";

export const mapStateToProps = state => {
  return {
    employee: state.employees.employeeData,
    companies: state.companies.data,
    errors: state.employees.errors,
    success: state.employees.success
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getEmployee: id => dispatch(getEmployee(id)),
    editEmployee: (id, posts) => dispatch(editEmployee(id, posts)),
    getCompanies: dispatch(getAllCompanies())
  };
};
