const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://elliot:<password>@cluster0.fyzximo.mongodb.net/?retryWrites=true&w=majority";
const init = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
init.connect(err => {
  const collection = init.db("test").collection("devices");
  // perform actions on the collection object
  init.close();
});

module.exports=init;
