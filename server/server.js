const express = require('express');
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes directory
require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://melonadmin:PzbabQ1hS3taJCUZ@meloncluster-6odek.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  console.log("Connected to server");
  const db = client.db("jobmelon")
  const listings = db.collection("listings");


  //console.log(listings);

  //Post all current jobs to currentjobs
  app.post('/currentjobs', (req, res) => {
     //const requestBody = req.body;

    //res.send(listings);
    listings.find({}).toArray(function(err, listing) {

      console.log(JSON.stringify(listing, null, 2));
      res.status(200).json({'listing' : joblistings});

    })
  })

  client.close();
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});
