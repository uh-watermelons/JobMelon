# JobMelon
An online website for those in need of reliable contractors.

### Pending Tasks
Front-end
- Fix annoying default favicon
- Move stylesheets for components from App.css to individual stylesheets
  - Example: HomePage stylings are in App.css, but make a HomePage.css file and move it there
- Create Home Page/Landing Page
  - Home page will have listing of jobs in tile format with minimal information (Job name, poster profile (name and picture), price, location)
- Create Footer
  - Create links for "Contact Us", "Terms of Use", "Privacy Policy", and "Cookie Policy"
- Create Terms of Use, Privacy Policy, and Cookie Policy Pages
- Create Messages Page
  - On each job page, user can message job poster
  - Message page will have message body from which user can message job poster
- Create Job Posting Page
  - Jobs will have Name, Price, Description, Location
- Create administration pages (allow administrator to remove job posting, users, etc.)
- Create Log In/Sign Up Page
- Create Profile Page
  - Edit button will allow user to submit form to edit page
  - Information will include: name, number, payment info, and current Job Listings (client/contractor)
  - For clients - Create Add new job offer

Back-end
- Populate database
    - Connect app to database
- Create functions for messaging
- Create functions for listing job
- Create function for processing payment
- Create routes for:
  - Home Page
  - Logging/Signing in
  - Messages
  - Profile Page
  - Job Listing Page

--- 

 *__*Completed Tasks will be be ~~crossed through~~*__

Updated 6/16/19
#### Jack
* ~~Create database~~ (6/10/19)
* ~~Populate Database~~ (6/16/19)
* Connect app to database
* Create functions for messaging
* Create functions for listing of jobs
* Create function for processing payment

#### Jan
- Fix Home Page
  - ~~Decide whether to move Header.js to be rendered in App.js or in HomePage.js component~~
  - Fix the width of JobListings
  - ~~Make JobListing card look (a bit) better~~ (6/11/19)
  - ~~Style the View Job button~~ (6/11/19)
  - Make sure cards are fixed height and width
- ~~Create Footer~~ (6/11/19)
  - Create links for "Contact Us", "Terms of Use", "Privacy Policy", and "Cookie Policy"
- Create Terms of Use, Privacy Policy, and Cookie Policy Pages
- ~~Fix JobListing (detailed) Page~~ (6/11/19)
- ~~Create New Job Listing Page~~ (6/11/19)
  - Fix price input field
  - Sanitize Data
- ~~Create Profile Page~~ (6/11/19)
  - ~~Component that is rendered is based on whether user is a client or a contractor~~

- ~~Chose color scheme and font~~ (6/11/19)
- ~~Make sure only maximum amount of JobListings in a row is 3~~
- ~~Created Basic Header~~ (6/12/19)
- ~~Created Basic layout of job listings using flexbox~~ (6/12/19)
- ~~Created Basic JobListing (detailed) page~~ (6/12/19)

#### Leisha
- Create Job Posting Page
  - Jobs will have Name, Price, Description, Location
  - Make sure to validate form, make sure data is sanitized
  - Clicking button to create job posting will prompt user to CONFIRM it

#### Jon
* ?

***
### Link to Project
https://github.com/uh-watermelons/jobmelon

***

## How to run client side
* `cd client`
* run: `npm install`
* to run app: `npm start`

## IntelliJ Project Settings
Make sure to enable EMCAscript 6 
(Languages & Frameworks > JavaScript > JavaScript language version: ECMAScript 6)

## Pages

Home
![Home](/images/homepage_v2.JPG)

Detailed Job Listing
![Detailed Job Listing](/images/JobListingDetailed_v2.JPG)

Profile
![Profile](/images/ProfilePage_v1.JPG)

Create Listing
![Create Job Listing](/images/CreateJobListing_v1.JPG)
