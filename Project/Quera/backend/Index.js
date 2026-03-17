const express = require("express");
const router = require("./Routes/BlogPostRouter");
const app = express()
const cors = require("cors");

app.use("/api/v2", router)
app.use(express.json());
app.use(cors());

