import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
// Call dotenv.config() to load environment variables from .env file
dotenv.config();
const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://vasanthanraja23:${password}@dev-cluster.b1v9yzk.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`;

const client = new MongoClient (connectionString);
let conn;
try {
conn = await client.connect();
console.log("connection successful")
} catch(e){
console.error(e);
}
let db = conn.db("vasanthanraja_23");
export default db;





