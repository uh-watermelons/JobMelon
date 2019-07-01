# JobMelon
An online website for those in need of reliable contractors.

### Pending Tasks
Front-end
- Fix annoying default favicon
- Create Messages Page
  - On each job page, user can message job poster
  - Message page will have message body from which user can message job poster
- Create administration pages (allow administrator to remove job posting, users, etc.)

Back-end
- Create function for processing payment

---

 *__*Completed Tasks will be be ~~crossed through~~*__*

Updated 6/24/19
#### Jack
* ~~Create database~~ (6/10/19)
* ~~Populate Database~~ (6/16/19)
* ~~Connect app to database~~ (6/20/19)
* ~~Work on routing~~ (6/21/19)
* ~~Use Iroh for dynamic analysis~~ (6/23/19)
* ~~Create Terms of Use, Privacy Policy, Contact Us pages~~ (6/28/19)
  * ~~Update footer to route pages accordingly~~ (6/28/19)
* ~~Review and update all documentation and create documentation as needed~~ (6/30/19)
  * ~~Wiki~~ (6/30/19)
  * ~~README~~ (6/30/19)

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
- ~~Create Log In/Sign Up Page~~ (6/24/2019)
- ~~Create Profile Page~~ (6/24/2019)
  - ~~Edit button will allow user to submit form to edit page~~ (6/24/2019)
  - ~~Information will include: name, number, payment info, and current Job Listings (client/contractor)~~ (6/24/2019)
  - ~~For clients - Create Add new job offer~~ (6/24/2019)
- ~~Implemnt authorization using JWT~~ (6/24/2019)
- Create API routes for:
 - Individual Job Listing pages
 - Contacting clients
 - Updating user information
 
#### Leisha
- Create Job Posting Page
  - Jobs will have Name, Price, Description, Location
  - Make sure to validate form, make sure data is sanitized
  - Clicking button to create job posting will prompt user to CONFIRM it

***

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

***
### PART IV (Release)
#### Final Duties
##### Jack
- Update and review all documentation (README, overall report, Wiki) to ensure it reflects the current state of the project

##### Jan
- Review any errors (console) and finish creating functions for job listing
- Clear up potential vulnerabilities

#### Technical Notes
##### How to install and use the application
1. Clone the repository from GitHub
- To do so, you can use GitHub Desktop or by using `git` via the command line with the following command:
  - `git clone https://github.com/uh-watermelons/jobmelon.git`

2. Install NodeJS
- The latest version of NodeJS needs to be installed in order for this application to run
  - You can download it here: https://nodejs.org/en/

3. Install NodeJS server-side packages  
- In the command line, change directory to `../jobmelon/server/`
  - Install all the NodeJS packages needed for this application by typing `npm install`
  
4. Install NodeJS client-side packages
- In the command line, change directory to `../jobmelon/client/`
  - Install all the NodeJS packages needed for this application by typing `npm install`

5. Start the application
- In the command line, change directory to `../jobmelon/`
  - Start the application by typing `npm run start`

6. Open the application
- Browse to the application at http://localhost:3000/
  - Note: After starting the client, your browser should automatically load the site

#### Closing Developer Notes
Overall, this was a pretty difficult project, especially given the time constraints. What made it more difficult was our significant resource constraints; initially we had a team of 4 but that ended up shrinking to a team of 2. This ended up impacting our final product, as we had higher expectations for the end product but ultimately weren't able to deliver some of the "cooler" features because we didn't have as many people working on it.

Another issue that we had was that, apart from Node, React, MongoDB, the other components of the application (Express, Axios, JWT, and others) were new and very different from other applications we had individually created in the past and there was an intense learning curve for the usage of these components and interlinking them together.

As a disclaimer, we are currently storing the URI connection string to the MongoDB database which stores our user and job listing data as well as the key used to encrypt the sensitive information (credit card number, password) in our source code. In a production environment, we would have stored these variables in environment variables instead because otherwise, these would be open to the public and they would be able to get into the database and decrypt the sensitive information.

#### Links
##### Link to GitHub repository
https://github.com/uh-watermelons/jobmelon

##### Link to final project documentation


#### Link to final release version of JobMelon


##### Link to JobMelon Wiki page


***
