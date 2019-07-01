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
  * ~~Report~~ (6/30/19)


#### Jan
- ~~Fix Home Page (6/30/19)
  - ~~Decide whether to move Header.js to be rendered in App.js or in HomePage.js component~~
  - ~~Fix the width of JobListings ~~(6/30/19)
  - ~~Make JobListing card look (a bit) better~~ (6/11/19)
  - ~~Style the View Job button~~(6/11/19)
- ~~Create Footer~~ (6/11/19)
- ~~Fix JobListing (detailed) Page~~ (6/11/19)
- ~~Create New Job Listing Page~~ (6/11/19)
  - ~~Fix price input field (6/30/19)
  - ~~Sanitize Data ~~(6/30/19)
- ~~Create Profile Page~~ (6/11/19)
  - ~~Component that is rendered is based on whether user is a client or a contractor~~(6/30/19)

- ~~Chose color scheme and font~~ (6/11/19)
- ~~Created Basic Header~~ (6/12/19)
- ~~Created Basic layout of job listings using flexbox~~ (6/12/19)
- ~~Created Basic JobListing (detailed) page~~ (6/12/19)
- ~~Create Log In/Sign Up Page~~ (6/24/2019)
- ~~Create Profile Page~~ (6/24/2019)
  - ~~Edit button will allow user to submit form to edit page~~ (6/24/2019)
  - ~~Information will include: name, number, payment info, and current Job Listings (client/contractor)~~ (6/24/2019)
  - ~~For clients - Create Add new job offer~~ (6/24/2019)
  
- ~~Implemnt authorization using JWT~~ (6/24/2019)
- ~~Create API routes for:~~ (6/30/19)
 - ~~Individual Job Listing pages~~ (6/30/19)
 - ~~Contacting clients~~ (6/30/19)
 - ~~Updating user information~~ (6/30/19)
 - ~~Creating Listing~~ (6/30/19)
 - ~~Getting user information~~ (6/30/19)
 - ~~Getting user's listings~~ (6/30/19)
 - ~~Getting all listings~~ (6/30/19)
 - ~~Remove listings~~ (6/30/19)
 - ~~Creating listings~~ (6/30/19)
 - ~~Middleware for handling session management~~ (6/30/19)
 - ~~Registering user~~ (6/30/19)
 - ~~Logging in user~~ (6/30/19)
 - ~~Logging out user~~ (6/30/19)
 
- ~~Wrap App with redux~~ (6/30/19)
- ~~Connect app with backend~~ (6/30/19)
- ~~Client-side routing~~ (6/30/19)
- ~~Create private routes for authorized users~~ (6/30/19)
- ~~Display errors upon invalid form values~~ (6/30/19)

#### Leisha

***

## IntelliJ Project Settings
Make sure to enable EMCAscript 6
(Languages & Frameworks > JavaScript > JavaScript language version: ECMAScript 6)

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
- In the command line, change directory to `../jobmelon/`
  - Install all the NodeJS packages needed for this application by typing `npm install`
 
4. Install NodeJS client-side packages
- In the command line, change directory to `../jobmelon/client/`
  - Install all the NodeJS packages needed for this application by typing `npm install`

5. Start the application
- In the command line, change directory to `../jobmelon/`
  - Start the application by typing `npm run prod`

6. Open the application
- Browse to the application at http://localhost:3000/
  - Note: After starting the client, your browser should automatically load the site
  - The server should be running on http://localhost:5000/
  - The client uses a proxy to make a request to the server

#### Closing Developer Notes

##### Jack
Overall, this was a pretty difficult project, especially given the time constraints. What made it more difficult was our significant resource constraints; initially we had a team of 4 but that ended up shrinking to a team of 2. This ended up impacting our final product, as we had higher expectations for the end product but ultimately weren't able to deliver some of the "cooler" features because we didn't have as many people working on it.

Another issue that we had was that, apart from Node, React, MongoDB, the other components of the application (Express, Axios, JWT, and others) were new and very different from other applications we had individually created in the past and there was an intense learning curve for the usage of these components and interlinking them together.

As a disclaimer, we are currently storing the URI connection string to the MongoDB database which stores our user and job listing data as well as the key used to encrypt the sensitive information (credit card number, password) in our source code. In a production environment, we would have stored these variables in environment variables instead because otherwise, these would be open to the public and they would be able to get into the database and decrypt the sensitive information.

##### Jan
This was an incredibly difficult endeavor. I have never implemented authorization for an application and I knew that would be a big hurdle. Through the development process I learned a lot about authorization of users, session management, and general backend development. I wish that I would not have spent so much time working on the front end because that time should have been allocated to the creating the back end. I learned that it is wiser to develop the back end first with the front end in mind instead of the opposite. I also wish that we had started developing in the very first week.

With all the challenges we faced and all the time put in, I am very proud of what we have created. It may not be the prettiest or most robust, but the basic principles of secure coding were adhered to. It was very fulfilling to see the functionality of our application just work. It's taught me a lot about how the front-end and back-end communicate.

My last wishes was to maybe have chosen a simpler application and used a familiar stack. I greatly underestimated how time-consuming creating all the functionality would be. Also, most of the group wasn't familiar with developing Node applications and that hindered their ability to contribute. I take the fault in this. But, somehow, we figured everything out and the end product is something we can be proud of.

#### Links
##### Link to GitHub repository
https://github.com/uh-watermelons/jobmelon

##### Link to final project documentation
https://github.com/uh-watermelons/jobmelon/blob/master/ICS_491-JobMelon_Documentation.pdf

##### Link to final release version of JobMelon
https://github.com/uh-watermelons/jobmelon/releases/tag/v1.0

##### Link to JobMelon Wiki page
https://github.com/uh-watermelons/jobmelon/wiki

***
