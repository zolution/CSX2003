const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'School';

// Use connect method to connect to the server
/*
var connectionCallback = function(error, client){
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    client.close();
}

MongoClient.connect(url, connectionCallback);
*/

// anonymous function:
/*
MongoClient.connect(url, function(err, client) {
//  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});
*/

//java lambda
MongoClient.connect(url, (err, client) => {
//  assert.equal(null, err);
  if(err){
    console.log("Connection Fail");
    return;
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});


