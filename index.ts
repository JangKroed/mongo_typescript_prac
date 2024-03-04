import express, { NextFunction, Request, Response } from "express";
import { client } from "./db/config/mongo";

const app = express();

app.use(express.json());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const collection = client.db("db_name").collection("collection_name");
    const data = await collection.find();

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, async () => {
  console.log("server start!");

  await client
    .connect()
    .then(() => {
      console.log("mongodb connected!");
    })
    .catch((err) => {
      console.error(err);
    });
});
