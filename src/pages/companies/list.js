import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";
import Api from "../../utils/api";
import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../store/containers/list";

class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //    companies: [],
      success: ""
    };
  }

  componentDidMount() {
    /* const { initData } = this.props;
    console.log(initData());*/
    //  initData();
    // const store = configureStore();
    // console.log(store.dispatch(loadCompanies()));
    /* try {
      let response = await Api.getCompanies();
      if (response.status === 200) {
        this.setState({ companies: response.data });
      }
    } catch (error) {
      console.error(error);
    }*/
  }

  removeCompany = id => {
    const removeFav = this.props.companies.filter(company => company.id !== id);
    this.setState({
      companies: removeFav
    });
  };

  async deleteCompany(id) {
    this.removeCompany(id);
    try {
      await this.props.delCompany(id);
      console.log(this.props);
      /* if (res.status === 204) {
        this.setState({
          success: "Company deleted"
        });
      }*/
    } catch (error) {}
  }

  companyList = () => {
    return this.props.companies.map((currentcompany, i) => {
      return (
        <tr key={i}>
          <td>{currentcompany.name}</td>
          <td>{currentcompany.email}</td>
          <td>
            {currentcompany.logo ? (
              <img
                style={{ width: "50px" }}
                src={Api.SERVER_URL + "/storage/logos/" + currentcompany.logo}
                alt="img"
              />
            ) : (
              ""
            )}
          </td>
          <td>{currentcompany.website}</td>
          <td>
            <button style={{ marginRight: "10px" }}>
              <Link to={"/companies/" + currentcompany.id}>Edit</Link>
            </button>
            <button onClick={() => this.deleteCompany(currentcompany.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { success } = this.state;
    return (
      <div>
        <div className="row">
          <h3>Company List</h3>
          <div className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Companies
            </Link>
          </div>
        </div>
        {this.props.success === 201 ? (
          <div className="valid-feedback" style={{ display: "block" }}>
            Company Created
          </div>
        ) : (
          ""
        )}
        {console.log(this.props.response)}
        {this.props.update !== undefined ? (
          <div className="valid-feedback" style={{ display: "block" }}>
            Company Updated
          </div>
        ) : (
          ""
        )}
        {this.props.del !== undefined ? (
          <div className="valid-feedback" style={{ display: "block" }}>
            Company deleted
          </div>
        ) : (
          ""
        )}
        <div className="valid-feedback" style={{ display: "block" }}>
          {success}
        </div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Logo</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.companyList()}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
