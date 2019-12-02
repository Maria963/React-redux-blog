import {
  getAllEmployees,
  createEmployee,
  editEmployee,
  delEmployee
} from "../../actions/employees";

export const mapStateToProps = state => {
  return {
    employees: state.employees.data,
    success: state.employees.success,
    errors: state.employees.errors
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getEmployees: dispatch(getAllEmployees()),
    createEmployees: posts => dispatch(createEmployee(posts)),
    editEmployee: (id, posts) => dispatch(editEmployee(id, posts)),
    delEmployee: id => dispatch(delEmployee(id))
  };
};
