const express = require("express");
const mongoDb = require("./utils/Db");
const app = express()

app.use(express.json())

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`Server Running PORT ${PORT}`)
});

mongoDb()