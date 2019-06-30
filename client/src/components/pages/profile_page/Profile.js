import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import CreateJobListing from '../create_job_listing_page/CreateJobListing';

import axios from 'axios';

import { Link } from 'react-router-dom';
import './Profile.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
     userData: {}
    }
  }

  componentDidMount() {
    // Connect to redux store to get auth info
    // Look at Header.js for example
    // Once you get auth info you get the userID
    if(this.props.auth.isAuthorizaed) {
      let userID = this.props.auth.user.id; // TODO
      let url = '/api/user/' + userID;
      axios
        .get(url)
        .then(res => this.setState({userData: res.data}))
        .catch(err => console.log(err));       
    }
  }

  handleEditProfile = (event) => {

  }

  render() {
    console.log(this.state.userData);
    const { userData} = this.state;
    console.log(userData);
    return (
      <div className="Profile">
        <Header />
        <div className="profile-layout">
          <h1 className="header">My Profile</h1>
          <ProfileRole role={ userData.role }/>
          <ProfileInformation 
            firstName={ userData.firstName } 
            lastName={ userData.lastName }
            email={ userData.email }
            ccNumber={ userData.ccNumber }
            ccExpiryDate={ userData.ccExpiryDate }
            ccSecurityCode={ userData.ccSecurityCode }
            /> 
          <Link to="/createjob" className="btn create">Add new job offer</Link>
          <h2 className="listings-header">My current job listings</h2>
          <CurrentListings userId={ userData._id }/>
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
  console.log(props);
  return (
  <div className="information">
  <h3>My information</h3>
  <p>{ props.firstName } {props.lastName}</p>
  <p>{ props.email }</p>
  <h3>Payment Info</h3>
  <PaymentInformation 
    ccNumber={ props.ccNumber }
    ccExpiryDate={ props.ccExpiryDate }
    ccSecurityCode={ props.ccSecurityCode }
  />
  <button onClick={props.handleEditProfile} className="btn edit">Edit Info</button>
  </div>
  );

}

function PaymentInformation(props) {
  const ccNumber = props.ccNumber+""; // for some reason can't get length property w/out +""
  const hasCard = (ccNumber.length > 0);
  return (
    hasCard
    ? (<div>
        <p>Card Number: XXXX-XXXX-XXXX-(1234) -TODO</p>
        <p>Expires: {props.ccExpiryDate }</p>
        <p>Security Code: {props.ccSecurityCode }</p>
      </div>)
    : (<div>
        <p>You don't have a card on file. Update your information</p>
      </div>)
  );
}



class CurrentListings extends Component {
  state = {
    listings: []
  }
  componentDidMount = () => {
    this.getCurrentListings();
    // Constantly update listings if it is removed
    this.timerID = setInterval(this.getCurrentListings, 500);
  }
  componentWillUnmount = () => {
    clearInterval(this.timerId);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.userId != this.props.userId) {
      //this.getCurrentListings();
    }
  }
  getCurrentListings = () => {
    const userId = this.props.userId;
    if(userId) {
    const url = '/api/listings/user/' + userId;
    axios
      .get(url)
      .then((res) => this.setState({listings:res.data}))
      .catch(err => console.log(err));    
     }
  }
  handleCompleteListing = (userId, listingId) => () => {
    const url = "/api/listings/complete/" + userId + "/" + listingId;
    axios
      .post(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      ;
  }
  handleRemoveListing = (userId, listingId) => () => {
    const url = "/api/listings/delete/" + userId + "/" + listingId;
    axios
      .delete(url)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      ;
  }

  render() {
    const Listings = this.state.listings.map((listing) => {
      if(!listing.complete) {
        return (
          <Listing 
            jobName={listing.jobName} 
            price={listing.price} 
            description={listing.description}
            handleCompleteListing={this.handleCompleteListing}
            handleRemoveListing={this.handleRemoveListing}
            key={listing._id}
            listingId={listing._id}
            userId={listing.owner}
            complete={listing.complete}
            />
            );        
         }
    });
    const PastListings = this.state.listings.map((listing) => {
      if(listing.complete) {
        return (
          <PastListing 
            jobName={listing.jobName} 
            price={listing.price} 
            description={listing.description}
            handleCompleteListing={this.handleCompleteListing}
            handleRemoveListing={this.handleRemoveListing}
            key={listing._id}
            listingId={listing._id}
            userId={listing.owner}
            complete={listing.complete}
            />
            );        
         }
    });

    return (
      <div>
        {Listings}
        <h4>Past job listings</h4>
        {PastListings}
      </div>
      );
  }
}

function Listing(props) {
  const {userId, listingId} = props;
  return (
    <div className="profile-listing">
      <p className="profile-listing-price">${props.price}</p>
      <p className="profile-listing-name">{props.jobName}</p>
      <button 
        onClick={props.handleCompleteListing(userId, listingId)} 
        className="btn complete">Complete</button>
      <button 
        onClick={props.handleRemoveListing(userId, listingId)} 
        className="btn delete">X</button>
    </div>
    );
}
function PastListing(props) {
  const {userId, listingId} = props;
  return (
    <div className="profile-listing-complete">
      <p className="profile-listing-complete-price">${props.price}</p>
      <p className="profile-listing-complete-name">{props.jobName}</p>
      <button 
        onClick={props.handleRemoveListing(userId, listingId)} 
        className="btn delete-completed">Remove</button>
    </div>
    );
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Profile);