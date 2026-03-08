const express = require("express");
const app = express();

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server are running ${PORT}`);
})

app.get("/", (req, res)=> {
    res.send("Hello how are you")
})