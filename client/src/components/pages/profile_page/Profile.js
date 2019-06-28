import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import CreateJobListing from '../create_job_listing_page/CreateJobListing';

import axios from 'axios';

import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
  /* Data:
      User
  */
  constructor(props){
    super(props);
    this.state = {
     userData: null
    }
  }


  componentDidMount() {
    // Connect to redux store to get auth info
    // Look at Header.js for example
    // Once you get auth info you get the userID
    let userID = 'USERID'; // TODO
    let url = '/api/user/' + userID;
    axios
      .get(url)
      .then(res => this.setState({userData: res.data}))
      .catch(err => console.log(err)); 

  }

  render() {
    const { user } = this.props;
    return (
      <div className="Profile">
        <Header />
        <div className="profile-layout">
          <h1 className="header">My Profile</h1>
          <ProfileRole role={ user.role } />
          <ProfileInformation name={ user.name } number={ user.number }/> 
          <h2 className="listings-header">My current job listings</h2>
          <CurrentListings listings={ user.listings }/>
          <Link to="/createjob" className="btn create">Add new job offer</Link>
        </div>
        <Footer />
      </div>
      );
  }
}

function ProfileRole(props) {
  return <h2 className="role">You are a { props.role }</h2>
}

function ProfileInformation(props) {
  // TODO: Format phone number
  // TODO: Payment info
  return (
  <div className="information">
  <h3>My information</h3>
  <p>{ props.name }</p>
  <p>{ props.number }</p>
  <p>Payment Info</p>
  <button className="btn edit">Edit Info</button>
  </div>
  );

}

function CurrentListings(props) {
  const { listings } = props; // 
  return listings
    .map(listing => <Listing price={listing.price} jobName={listing.jobName}/>);
}

function Listing(props) {
  return (
    <div className="profile-listing">
      <p className="profile-listing-price">${props.price}</p>
      <p className="profile-listing-name">{props.jobName}</p>
      <button className="btn delete">Remove</button>
    </div>
    );
}


export default Profile;