const{MongoClient:MongoClient}=require("mongodb"),connectionUrl=process.env.DB_NAME,dbName=process.env.DB_NAME,init=async()=>(await MongoClient.connect(connectionUrl));module.exports={init:init};
