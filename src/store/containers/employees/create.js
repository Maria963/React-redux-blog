import { createEmployee } from "../../actions/employees";

export const mapStateToProps = state => {
  return {
    errors: state.employees.errors,
    success: state.employees.success
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    createEmployees: posts => dispatch(createEmployee(posts))
  };
};
