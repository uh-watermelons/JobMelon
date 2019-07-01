import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './PrivacyPolicy.css'

class PrivacyPolicy extends Component {

  render() {
    return (
      <div className="PrivacyPolicy">
        <Header />
        <div>
          <div>
            <br></br>
            <br></br>
            <h2 class="center">Privacy Policy</h2>
            <h3 class="center">Updated: June 29, 2019</h3>
            <div class="indent">
              <p class="center">The purpose of this privacy policy is to inform the users (you) what data we collect from you, why we collect it, and what we do to ensure that it's protected and stays protected. These policies are subject to change in the future. If they do change, a notification will be issued to all affected parties.</p>
              <p>
              <br></br>Data that we collect
              <br></br>The data that we collect is the only the data that you give us. For example, if you choose to save your credit card number on your account, we store that information in our databases in an encrypted state. Other information, such as your IP address or web browser information is not stored in our databases.
              <br></br>
              <br></br>Why we collect your data
              <br></br>We collect your data to make future transactions easier so that you won't have to pull out your credit card every time you need to pay somebody for a job completion. We also can use your email address to send out notifications and security alerts.
              <br></br>
              <br></br>How we protect your data
              <br></br>As of the date this document was updated, we are not storing any sensitive information other than your credit card information and passwords. User passwords are safe and encrypted, as are user credit card numbers. When a transaction commences, your credit card information is stored (regardless if you've stored it in your user profile) until the payment is fully processed at which point the payment information is fully purged from our databases.
              <br></br>
              <br></br>If there is any suspected breach of information due to suspicions of us (JobMelon) mishandling your data, please contact us at info@jobmelon.com
              <br></br>
              <br></br>
              </p>
              <p>Thanks for using JobMelon!</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      );
  }
}


export default PrivacyPolicy;
