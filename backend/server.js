import express from "express";
import cors from "cors";
import "dotenv/config";

//app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("API WOrking");
});
app.listen(port, () => {
  console.log("server listening on port 4000");
});
