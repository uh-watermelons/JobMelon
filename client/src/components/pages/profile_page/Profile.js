import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

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

  componentDidMount = () => {
    // Connect to redux store to get auth info
    // Look at Header.js for example
    // Once you get auth info you get the userID
    if(this.props.auth.isAuthenticated) {
      this.getUserInfo(this.props.auth.user.id);
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  }
  getUserInfo(userId) {
      let url = '/api/user/' + userId + '';
      axios
        .get(url)
        .then(res => {this.setState({userData: res.data})})
        .catch(err => console.log(err));     
  }

  render() {
    const { userData } = this.state;
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
          <h2 style={{marginTop: '1em'}} className="listings-header">My Current Listings</h2>
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
  <Link to='/edit' className="btn edit">Edit Info</Link>
  </div>
  );

}

function PaymentInformation(props) {
  const ccNumber = props.ccNumber+""; // for some reason can't get length property w/out +""
  const hasCard = (ccNumber.length > 0);
  let lastfour = ccNumber+"";
  if(lastfour.length>4) {lastfour = lastfour.substring(lastfour.length-5, lastfour.length-1)}
  return (
    hasCard
    ? (<div>
        <p>Card Number: XXXX-XXXX-XXXX-{lastfour}</p>
        <p>Expires: {props.ccExpiryDate }</p>
        <p>Security Code: {props.ccSecurityCode }</p>
      </div>)
    : (<div>
        <p>You don't have a card on file. Update your information</p>
      </div>)
  );
}



class CurrentListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount = () => {
    this.getCurrentListings();
  }
  componentWillUnmount = () => {
  }
  componentDidUpdate(prevProps) {
    if(prevProps.userId != this.props.userId) {
      this.getCurrentListings();
    }
  }
  getCurrentListings = () => {
    const userId = this.props.userId;
    if(userId) {
    const url = '/api/listings/user/' + userId +'';
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
    this.getCurrentListings();
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
        <h4>Completed Listings</h4>
        {PastListings}
      </div>
      );
  }
}

function Listing(props) {
  const {userId, listingId} = props;
  const pageUrl = '/job/' + listingId;
  return (
    <div className="profile-listing">
      <p className="profile-listing-price">${props.price}</p>
      <Link to={pageUrl} className="profile-listing-name">{props.jobName}</Link>
      <button 
        onClick={props.handleCompleteListing(userId, listingId)} 
        className="btn complete">Complete</button>
      <button 
        onClick={props.handleRemoveListing(userId, listingId)} 
        className="btn delete">Cancel</button>
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
        className="btn delete-completed">Delete</button>
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