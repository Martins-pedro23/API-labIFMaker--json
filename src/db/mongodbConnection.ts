import mongoose from "mongoose";

export async function MongoDBConnection() {
  await mongoose.connect(process.env.DATABASE_URL as string);
}
