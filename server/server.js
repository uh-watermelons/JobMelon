
//Dynamic analysis
//const Iroh = require("iroh");
//let stage = new Iroh.Stage(`

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const listings = require('./routes/api/listings');
const authentication = require('./routes/api/authentication');

const app = express();

// FIX THIS -- USE express.json() instead
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
   })
  );
app.use(bodyParser.json());

// This allows cross-origin resource sharing to make HTTP requests
app.use(cors({credentials: true, origin: true}));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB (using mongoose)
mongoose
  .connect(
      db,
      { useNewUrlParser: true, dbName: "jobmelon" }
    )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
// app.use(passport.initialize());

// // Passport config
// require("./config/passport")(passport);

// Routes
app.use("/api/authentication", authentication); // registering/logging in
app.use("/api/user", users); // getting/updating user data
app.use("/api/listings", listings); // get/update/delete listing

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`We're up on PORT:${port}. CHEEHOO!`));

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
// Import Routes directory
//require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});


//`);

/* Iroh stuff */
// function call
// stage.addListener(Iroh.CALL)
//     .on("before", (e) => {
//         let external = e.external ? "#external" : "";
//         console.log(" ".repeat(e.indent) + "call", e.name, external, "(", e.arguments, ")");
//         //console.log(e.getSource());
//     })
//     .on("after", (e) => {
//         let external = e.external ? "#external" : "";
//         console.log(" ".repeat(e.indent) + "call", e.name, "end", external, "->", [e.return]);
//         //console.log(e.getSource());
//     });
//
// // function
// stage.addListener(Iroh.FUNCTION)
//     .on("enter", (e) => {
//         let sloppy = e.sloppy ? "#sloppy" : "";
//         if (e.sloppy) {
//             console.log(" ".repeat(e.indent) + "call", e.name, sloppy, "(", e.arguments, ")");
//             //console.log(e.getSource());
//         }
//     })
//     .on("leave", (e) => {
//         let sloppy = e.sloppy ? "#sloppy" : "";
//         if (e.sloppy) {
//             console.log(" ".repeat(e.indent) + "call", e.name, "end", sloppy, "->", [void 0]);
//             //console.log(e.getSource());
//         }
//     })
//     .on("return", (e) => {
//         let sloppy = e.sloppy ? "#sloppy" : "";
//         if (e.sloppy) {
//             console.log(" ".repeat(e.indent) + "call", e.name, "end", sloppy, "->", [e.return]);
//             //console.log(e.getSource());
//         }
//     });
//
// // program
// stage.addListener(Iroh.PROGRAM)
//     .on("enter", (e) => {
//         console.log(" ".repeat(e.indent) + "Program");
//     })
//     .on("leave", (e) => {
//         console.log(" ".repeat(e.indent) + "Program end", "->", e.return);
//     });
//
// eval(stage.script);



