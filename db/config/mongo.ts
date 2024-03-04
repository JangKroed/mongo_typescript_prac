import { MongoClient } from "mongodb";

const mongo_url = "mongodb://localhost:27017";
const client = new MongoClient(mongo_url);

export { client };
