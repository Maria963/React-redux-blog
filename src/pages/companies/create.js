import React, { Component } from "react";
import Input from "../../components/basic/input-button";
import Submit from "../../components/basic/submit-button";
import Errors from "../../components/basic/errors";
import Success from "../../components/basic/success";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../store/containers/companies/create";

class CreateCompanies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      logo: "",
      website: "",
      errors: "",
      nameerror: "",
      success: "",
      inputKey: Date.now()
    };
  }

  onChangeCompaniesName = e => {
    this.setState({
      name: e.target.value,
      nameerror: "",
      success: ""
    });
  };

  onChangeCompaniesEmail = e => {
    this.setState({
      email: e.target.value,
      success: ""
    });
  };

  onChangeCompaniesLogo = e => {
    this.setState({
      logo: e.target.files[0],
      success: ""
    });
  };

  onChangeCompaniesWebsite = e => {
    this.setState({
      website: e.target.value,
      success: ""
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, logo, website } = this.state;
    const newCompanies = new FormData();
    newCompanies.append("name", name);
    newCompanies.append("email", email);
    newCompanies.append("logo", logo);
    newCompanies.append("website", website);

    await this.props.createCompanies(newCompanies);
    if (this.props.success === 201) {
      this.props.history.push("/companies");
    } else {
      this.setState({
        nameerror: this.props.errors
      });
    }
  };

  render() {
    const { email, name, website, success, nameerror, inputKey } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Company</h3>
        <form encType="multipart/form-data" onSubmit={this.onSubmit}>
          <Errors name={nameerror} />
          <Input
            name="Name:"
            type="text"
            value={name}
            changeFunction={this.onChangeCompaniesName}
          />
          <Input
            name="Email:"
            type="email"
            value={email}
            changeFunction={this.onChangeCompaniesEmail}
          />
          <Input
            name="Logo:"
            type="file"
            key={inputKey}
            changeFunction={this.onChangeCompaniesLogo}
          />
          <Input
            name="website:"
            type="text"
            value={website}
            changeFunction={this.onChangeCompaniesWebsite}
          />
          <Submit value="Create Company" />
          <Success name={success} />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompanies);
