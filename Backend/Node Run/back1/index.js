const express = require("express");
const mongoDb = require("./utils/Db");
const app = express();
// const cors = require("cors");

app.use(express.json())

const PORT = 4000

app.listen(PORT, ()=>{
    console.log(`Server Running PORT ${PORT}`)
});

mongoDb()

// app.use(cors({
//     origin: "http://localhost:4000",
//     credentials:true
// }));