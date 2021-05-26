import { MongoClient } from "mongodb";

async function connectDatabase() {
  const url =
    "mongodb+srv://admin:YV6JllNGxoya4Jbl@cluster0.eg3qi.mongodb.net/EVENTS?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });

  return client;
}

async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

async function getAllocuments(client, collection, params, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(params)
    .sort(sort)
    .toArray();

  return documents;
}
export { connectDatabase, insertDocument, getAllocuments };
