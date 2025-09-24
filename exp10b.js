const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "college";   // database name
const client = new MongoClient(url);
async function run() {
	try {
		await client.connect();
		console.log("Connected to MongoDB");
		const db = client.db(dbName);
		const collection = db.collection("students");
		await collection.insertOne({
			name: "Prasanth",
			age: 21,
			course: "Computer Science"
		});
		await collection.insertMany([
			{ name: "Kumar", age: 22, course: "IT" },
			{ name: "Ravi", age: 20, course: "Electronics" }
		]);
		console.log("Documents inserted");
		const allStudents = await collection.find().toArray();
		console.log("All Students:", allStudents);
		const csStudents = await collection.find({ course: "Computer Science" }).toArray();	
		console.log("CS Students:", csStudents);
		await collection.updateOne(	
			{ name: "Prasanth" },
			{ $set: { course: "Data Science" } }
		);
		console.log("Updated Prasanth's course");
		await collection.updateMany({}, { $inc: { age: 1 } });
		console.log("Increased age for all students");
		await collection.deleteOne({ name: "Ravi" });
		console.log(" Removed Ravi");
		await collection.deleteMany({ course: "IT" });
		console.log("Removed all IT students");
	} catch (err) {
		console.error(err);
	} finally {
		await client.close();
	}
}
run();
