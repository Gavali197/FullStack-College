const express = require("express");
const router = require("./Routes/BlogPostRouter");
const app = express()
const cors = require("cors");
const dbConnection = require("./Utils/Db");
const PORT = 3030

dbConnection();

app.use("/api/v2", router)
app.use(express.json());
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`SERVER ARE RUNNING ON ${PORT}`);
})