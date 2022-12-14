import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db.collection("events").find({}).limit(20).toArray(); 

    res.json(data);
}