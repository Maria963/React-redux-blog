import React from "react";
import { Link, Nav, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCompanies } from "../store/actions/companies";
import { getAllEmployees } from "../store/actions/employees";

import "./style.css";

const Header = props => {
  function logout() {
    localStorage.removeItem("access_token");
    props.history.push("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collpase navbar-collapse">
        <NavLink
          className="menu"
          exact={true}
          activeClassName="is-active"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink className="menu" activeClassName="is-active" to="/companies">
          Companies {props.companies.length}
        </NavLink>
        <NavLink className="menu" activeClassName="is-active" to="/employees">
          Employees {props.employees.length}
        </NavLink>
        <button onClick={logout} className="nav-link">
          Logout
        </button>
      </div>
    </nav>
  );
};

export const mapStateToProps = state => {
  return {
    companies: state.companies.data,
    employees: state.employees.data
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getCompanies: dispatch(getAllCompanies()),
    getEmployees: dispatch(getAllEmployees())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
