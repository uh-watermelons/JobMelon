import React, { Component } from 'react';
import Header from '../../Header';
import watermelon from '../../../images/watermelon.svg';

class JobListingDetailed extends Component {
  /* Data:
      price,
      jobName,
      location
      description,
      location,
  */
  state = {

  }

  render() {
    const price = this.props.listing.price || 0;
    const name = this.props.listing.jobName || "Job Name";
    //const picture = this.props.listing.picture || "Profile Picture";
    const location = this.props.listing.location || "Location";
    const description = this.props.listing.description || "Description";
    return (
      <div className="JobListingDetailed">
        <Header />
        <div className="listing">
          <div className="listing-info">
            <h1>{ name }</h1>
            <h3>{ location }</h3>
            <h2>${ price }</h2>

            <p>{ description }</p>
          </div>
          <div className="listing-contact">
              <div>
                <img src={ watermelon }/>
              </div>
              <button className="contact-btn" href="#">Message</button>
          </div>
        </div>


      </div>
      );
  }
}


export default JobListingDetailed;
