const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db("myDatabase");
    const collection = db.collection("students");
    await collection.insertMany([
      { name: "Prasanth", age: 22, grade: "A" },
      { name: "Kumar", age: 24, grade: "B" },
      { name: "Ravi", age: 21, grade: "A" },
      { name: "Anita", age: 23, grade: "C" },
      { name: "Divya", age: 22, grade: "B" }
    ]);
    console.log("Sample records inserted!");
    const allStudents = await collection.find().toArray();
    console.log("All Students:", allStudents);
    const limitedStudents = await collection.find().limit(3).toArray();
    console.log("First 3 Students:", limitedStudents);
    const sortedStudents = await collection.find().sort({ age: 1 }).toArray();
    console.log("Students sorted by age (asc):", sortedStudents);
    await collection.createIndex({ name: 1 });
    console.log("Index created on 'name' field");
    const gradeSummary = await collection.aggregate([
      { $group: { _id: "$grade", count: { $sum: 1 } } }
    ]).toArray();
    console.log("Grade Summary:", gradeSummary);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}
run();
