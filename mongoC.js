import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
// Call dotenv.config() to load environment variables from .env file
dotenv.config();
const password = encodeURIComponent (process.env.MONGO_PASSWORD.trim());
//const connectionString = 'mongodb+srv://integrationninjas:$(password)@dev-cluster.7nko6hh.mongodb.net/?retryWrites=true&w-majority&
const client = new MongoClient (connectionString);
let conn;
try {
conn = await client.connect();
console.log("connection successful")
} catch(e){
console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;