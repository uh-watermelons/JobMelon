import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import defaultPicture from '../../../images/user.png';
import './JobListingDetailed.css';
import axios from 'axios'

class JobListingDetailed extends Component {
    state = {
      listingData: {}
    }
  
  componentDidMount() {
    // Grab the listingId from the URL
    const {listingId} = this.props.match.params;
    const url = '/api/listings/' + listingId;
    axios
      .get(url)
      .then(res => this.setState({listingData:res.data}))
      .catch(err => console.log(err))
  }

  handleClick = () => {
    console.log('clickity');
    const message = 'Client will be notified. If interested, they will contact you through email.';
    window.confirm(message);
  }

  render() {
    /*
      cityName, datePosted, description, jobName, owner, ownerName, price,
    */
    const {
      jobName,
      cityName, stateCode,
      price,
      description,
      ownerName
    } = this.state.listingData;
    return (
      <div className="JobListingDetailed">
        <Header />
        <div className="listing">
          <div className="listing-info">
            <h2 style={{"borderBottom":"solid 1px #CCC"}}>{ jobName }</h2>
            <h4>{ cityName }, { stateCode }</h4>
            <h2>${ price }</h2>
            <p>{ description }</p>
          </div>
          <div className="listing-contact">
              <div>
                <img alt="default" src={ defaultPicture }/>
              </div>
               <h4 style={{textAlign:"center"}}>{ownerName}</h4>
              <button onClick={this.handleClick} className="contact-btn" href="#">Contact</button>
          </div>
        </div>
        <Footer />
      </div>
      );
  }
}


export default JobListingDetailed;