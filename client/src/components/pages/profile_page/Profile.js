import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './Profile.css';

class Profile extends Component {
  /* Data:
      User
  */
  state = {
  }

  render() {
    const { user } = this.props;
    console.log(user.listings);
    return (
      <div className="Profile">
        <Header />
        <div className="profile-layout">
          <h1 className="header">My Profile</h1>
          <ProfileRole role={ user.role } />
          <ProfileInformation name={ user.name } number={ user.number }/> 
          <h2 className="listings-header">My current job listings</h2>
          <CurrentListings listings={ user.listings }/>
          <button className="btn create">Add new job offer</button>
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
    .map
    (listing => 
      <Listing price={listing.price} jobName={listing.jobName}/>
      );
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