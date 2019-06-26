import React, { Component } from 'react';
import watermelon from "../../../images/watermelon.svg";
import { Link } from 'react-router-dom';

class JobListing extends Component {

  state = {

  }

  render() {
    const maxStringLength = 20;
    let name = "";// = this.props.jobName || "Job Name";
    if(this.props.jobName.length > maxStringLength) {
      name = this.props.jobName.substring(0, 15) + "...";
    } else {
      name = this.props.jobName || "Job Name";
    }
    const price = this.props.price || 0;
    //const picture = this.props.picture || "Profile Picture";
    const location = this.props.location || "Location";
    return (
      <div className="JobListing" >
        <div className="jobName"><h3>{ name }</h3></div>
        <div className="description">
          <h2 className="price">${ price }</h2>
          <h5 className="location">{ location }</h5>
        </div>
        <div  className="picture">
          <img
          src={ watermelon }
          alt="Default"
          style={{"width":"100%","height":"100%"}}
          />
        </div>
        <Link className="button" to="/job">View Job</Link>
      </div>
      );
  }
}

export default JobListing;
