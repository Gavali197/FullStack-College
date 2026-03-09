const express = require("express");
const app = express();

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server are running ${PORT}`);
})

// app.use("/", (req, res)=> {
//     console.log("recive");
// })

app.get("/", (req, res)=> {
    res.send("<h1>Hello how are you 456</h1>")
})