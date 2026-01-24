const express = require("express");
const app = express();


//passed json file in brwoser
app.get("/user", (req, res)=>{
    res.json({
        name: "Hemant",
        age: "21"
    })
    // res.send("Hello world my frist server are running");
})
    app.use(express.json());

app.post("/register", (req, res) => {
 res.send("hello");
});

app.listen(5000, ()=>{
    console.log("Server Running 5000 port");
})

