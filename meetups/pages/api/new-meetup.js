import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://suraj:eDoY7gps1LAgnb7b@cluster0.rhe8dgl.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({message: ' Meetup inserted!'});
    }
}

export default handler;