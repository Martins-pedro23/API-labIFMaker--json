import "dotenv/config";
import { app } from "./app";
import { MongoDBConnection } from "@/db/mongodbConnection";
import { blue, underline } from "colorette";

const start = async () => {
  try {
    await MongoDBConnection();
    await app.listen({ port: 3000 }, () => {
      console.log("-".repeat(50));
      console.log(
        blue(" ✅ Server is running on port 3000\n"),
        blue(`✅ Servidor rodando em: ${underline("http://localhost:3000\n")}`),
        blue(`✅ MongoDB rodando com sucesso: `)
      );
      console.log("-".repeat(50));
    });
  } catch (err) {
    console.log("-".repeat(50));
    console.log(`❌ Error: \n ${err}`);
    console.log("-".repeat(50));
    app.log.error(err);
    process.exit(1);
  }
};

start();
