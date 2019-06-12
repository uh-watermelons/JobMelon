import React, { Component } from 'react';
import watermelon from "../../../images/watermelon.svg";
class JobListing extends Component {

  state = {

  }

  render() {
    const price = this.props.price || 0;
    const name = this.props.jobName || "Job Name";
    //const picture = this.props.picture || "Profile Picture";
    const location = this.props.location || "Location";
    return (
      <div className="JobListing" >

        <div>${ price }</div>
        <div><h2>{ name }</h2></div>
        <div>
          <img src= { watermelon } 
              alt="Default Picture"
              style={{"width":"50px","height":"50px"}}/>
        </div>
        <div>{ location }</div>
        <button>View Job</button>

      </div>
      );
  }
}


export default JobListing;
