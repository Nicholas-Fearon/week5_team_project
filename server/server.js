import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// db pool url goes here
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/gameprompts", async function (request, response) {
  const result = await db.query("SELECT * FROM gameprompts");
  const gameprompts = result.rows;
  response.json(gameprompts);
});

app.get("/options", async function (request, response) {
  const result = await db.query("SELECT * FROM options");
  const options = result.rows;
  response.json(options);
});

//test
app.get("/", function (request, response) {
  response.json("this is the root test");
});

app.listen(8080, function () {
  console.log("app is running on port 8080");
});
