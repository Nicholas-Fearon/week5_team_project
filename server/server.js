//assets all installed and imported
//server currently running on port 8080 all working

import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// db pool url set up here, password and url all connected
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

//prompts now all connected on the server api for referance

app.get("/gameprompts", async function (request, response) {
  const result = await db.query("SELECT * FROM gameprompts");
  const gameprompts = result.rows;
  response.json(gameprompts);
});

app.get("/outcomes", async function (request, response) {
  const result = await db.query("SELECT * FROM outcomes");
  const outcomes = result.rows;
  response.json(outcomes);
});

app.get("/monsters", async function (request, response) {
  const result = await db.query("SELECT * FROM monsters");
  const monsters = result.rows;
  response.json(monsters);
});

app.get("/room", async function (request, response) {
  const result = await db.query("SELECT * FROM room");
  const room = result.rows;
  response.json(room);
});

app.get("/username", async function (request, response) {
  const result = await db.query("SELECT * FROM username");
  const username = result.rows;
  response.json(username);
});
// empty space atm , need to decide on options and outcomes for each then can construct the post functions to data base and server api
app.get("/options", async function (request, response) {
  const result = await db.query("SELECT * FROM options");
  const options = result.rows;
  response.json(options);
});

//test, runs fine
app.get("/", function (request, response) {
  response.json("this is the root test");
});

app.listen(8080, function () {
  console.log("app is running on port 8080");
});
