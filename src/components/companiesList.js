import React, { PropTypes } from "react";

const CompaniesL = ({ companies }) => {
  return (
    <ul className="list-group">
      {console.log(companies)}
      {companies.map(company => (
        <li className="list-group-item" key={company.id}>
          {company.name}
        </li>
      ))}
    </ul>
  );
};

/*CompaniesL.propTypes = {
  companies: PropTypes.array.isRequired
};*/

export default CompaniesL;
