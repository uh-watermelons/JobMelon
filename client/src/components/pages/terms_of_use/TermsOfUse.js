import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './TermsOfUse.css'

class TermsOfUse extends Component {

  render() {
    return (
      <div className="TermsOfUse">
        <Header />
        <div>
          <div>
            <br></br>
            <br></br>
            <h2 class="center">Terms Of Use and Service</h2>
            <h3 class="center">Updated: June 29, 2019</h3>
            <div class="indent">
              <p class="center">Hi there! Thanks for using JobMelon, the application which makes it quick and easy for you to find jobs and get jobs without so much of the hassle. By using JobMelon, you are agreeing to these terms of service and use as defined on this page and therefore you must abide by and follow these policies as such. If you do not comply, we may stop providing service to you.</p>
              <p>
              <br></br>1. You may not misuse our services. Misuse of our service includes, but is not limited to, denying service to other users, access or use of content or data not authorized to you, sharing data which you are unauthorized to share, or conducting any illegal or unlawful activities through our platform. Administrators at JobMelon will determine violations of our policy and the law, which may result in a suspension or indefinite ban of your user account and legal action if applicable.
              <br></br>
              <br></br>2. You are expected to keep your account safe. JobMelon stores and encrypts your user password, but you as the user should ensure that your password does not become compromised. In the event of a suspected password breach, it is recommended that you contact us at info@jobmelon.com to notify our administrators of a breach such that we may take the appropriate actions to disable the account and issue you a password reset for you to regain control of your account. We are not responsible for any malicious actions performed on your account during an account breach.
              <br></br>
              <br></br>3. We may use your data in accordance with our Privacy Policy. The use of your data in JobMelon is detailed in our Privacy Policy. Your data is used to protect your account and information. By using our services, you are agreeing to our usage of your data as detailed in the Privacy Policy. If you believe that your privacy is being breached, please contact us at info@jobmelon.com
              <br></br>
              <br></br>4. We may change our terms of service and use at will. We at JobMelon have big plans for the future and will change our terms of service and use accordingly as new features and services are created and old features and services are removed. We will notify users of any changes we make to our policies through an email notification twenty-one days before any changes are in effect.
              <br></br>
              <br></br>5. We are not liable for any financial losses or damages. Currently, as payment is not routed through us directly, we are not liable for any financial losses due to instances of scamming, unverified payment, or otherwise.</p>

              <br></br>
              <br></br>
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


export default TermsOfUse;
