import { MongoClient } from "mongodb";

export const connectToDb = async () => {
  const uri =
    "mongodb+srv://admin:YV6JllNGxoya4Jbl@cluster0.eg3qi.mongodb.net/AUTH?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  return client;
};
