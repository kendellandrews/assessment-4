const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getAllFortunes, getFortune, addFortune, deleteFortunes} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/all", getAllFortunes);
app.post("/api/addFortune", addFortune);
app.delete("/api/deleteFortune/:id", deleteFortunes);

app.listen(4000, () => console.log("Server running on 4000"));

