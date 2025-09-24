const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db("myDatabase");
    const collection = await db.createCollection("students");
    console.log("Collection created!");
    await collection.insertOne({ name: "Prasanth", age: 22 });
    console.log("Document inserted!");
    await collection.drop();
    console.log("Collection dropped!");
    await db.dropDatabase();
     console.log("Database dropped!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();
