import React, { Component } from "react";
import Input from "../../components/basic/input-button";
import Submit from "../../components/basic/submit-button";
import Select from "../../components/basic/select";
import Errors from "../../components/basic/errors";
import Success from "../../components/basic/success";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../store/containers/employees/edit";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      company_id: "",
      email: "",
      phone: "",
      errors: "",
      nameerror: "",
      lastnameerror: "",
      success: "",
      companies: []
    };
  }

  async componentDidMount() {
    let employee_id = this.props.match.params.id;
    try {
      await this.props.getEmployee(employee_id);
      if (this.props.employee.status === 200) {
        this.setState({
          first_name:
            this.props.employee.data.first_name == null
              ? ""
              : this.props.employee.data.first_name,
          last_name:
            this.props.employee.data.last_name == null
              ? ""
              : this.props.employee.data.last_name,
          company_id:
            this.props.employee.data.company_id == null
              ? ""
              : this.props.employee.data.company_id,
          email:
            this.props.employee.data.email == null
              ? ""
              : this.props.employee.data.email,
          phone:
            this.props.employee.data.phone == null
              ? ""
              : this.props.employee.data.phone
        });
      }
    } catch (error) {}
  }

  onChangeEmployeeFirstname = e => {
    this.setState({
      first_name: e.target.value,
      success: "",
      nameerror: ""
    });
  };

  onChangeEmployeeLastname = e => {
    this.setState({
      last_name: e.target.value,
      success: "",
      lastnameerror: ""
    });
  };

  onChangeEmployeeEmail = e => {
    this.setState({
      email: e.target.value,
      success: ""
    });
  };

  onChangeEmployeePhone = e => {
    this.setState({
      phone: e.target.value,
      success: ""
    });
  };

  onChangeEmployeeCompany = e => {
    this.setState({
      company_id: e.target.value,
      success: ""
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { first_name, last_name, company_id, email, phone } = this.state;

    const updateEmployee = {
      first_name,
      last_name,
      email,
      company_id,
      phone
    };

    let employee_id = this.props.match.params.id;
    await this.props.editEmployee(employee_id, updateEmployee);
    if (this.props.success === 200) {
      this.props.history.push("/employees");
    } else {
      this.setState({
        nameerror: this.props.errors.first_name,
        lastnameerror: this.props.errors.last_name
      });
    }
  };

  companiesList = () => {
    const { company_id } = this.state;
    const { companies } = this.props;
    return companies.map(company => {
      return (
        <option
          value={company.id}
          key={company.id}
          selected={company_id === company.id ? "selected" : ""}
        >
          {company.name}
        </option>
      );
    });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      phone,
      nameerror,
      lastnameerror,
      success
    } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update New Employee</h3>
        <form encType="multipart/form-data" onSubmit={this.onSubmit}>
          <Errors name={nameerror} />
          <Errors name={lastnameerror} />
          <Input
            name="Firstname:"
            type="text"
            value={first_name}
            changeFunction={this.onChangeEmployeeFirstname}
          />
          <Input
            name="Lastname:"
            type="text"
            value={last_name}
            changeFunction={this.onChangeEmployeeLastname}
          />
          <Select
            name="Company name"
            id="company_id"
            changeFunction={this.onChangeEmployeeCompany}
            default="Choose Company"
            optionList={this.companiesList()}
          />
          <Input
            name="Email:"
            type="email"
            value={email}
            changeFunction={this.onChangeEmployeeEmail}
          />
          <Input
            name="Phone:"
            type="text"
            value={phone}
            changeFunction={this.onChangeEmployeePhone}
          />
          <Submit value="Update Employee" />
          <Success name={success} />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee);
