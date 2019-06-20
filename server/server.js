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
console.log("Created client");
client.connect(err => {
  console.log("Connected to server");
  const listings = client.db("jobmelon").collection("listings");
  // Export listings variable to other files, can be used like this:
  // const listingsModule = require('./listings');
  // const listings = listingsModule.listings;
  exports.listings = listings;

  client.close();
});

app.listen(port, (err) => {
  if (err) { console.log(err); };
  console.log('Listening on port ' + port);
});
