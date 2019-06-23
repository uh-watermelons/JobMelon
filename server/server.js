const express = require('express');

const db = require("./mongo");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});

app.get('/currentjobs', (req, res) => {

  db.getDB().collection("listings").find({}).toArray((err, listing) => {
    if (err)
      console.log(err);
    else {
      //console.log(JSON.stringify(listing, null, 2));
      res.json(listing);
    }
  });

});


db.connect(err => {
    app.listen(port, (err) => {
      if (err) { console.log(err); };
      console.log('Listening on port ' + port);
    });

    //db.close();

});


