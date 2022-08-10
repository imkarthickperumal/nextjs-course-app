import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, img, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://learning:learning2022@cluster0.dxsmnxr.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message : 'Meetup inserted!'});
  }
}
export default handler;
