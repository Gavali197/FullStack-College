const express = require("express");
const router = require("./Routes/BlogPostRouter");
const app = express()
const cors = require("cors");
const dbConnection = require("./Utils/Db");
const errorHandler = require("./Middleware/error");
// // const errorHandler = require("../../../Backend/Node Run/back1/Middleware/error");
const PORT = 3030

dbConnection();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/v2", router)

app.use(errorHandler)



app.listen(PORT, ()=>{
    console.log(`SERVER ARE RUNNING ON ${PORT}`);
})