const express = require("express");
const app = express();

app.listen(4000, ()=>{
    console.log("Server Running 4000 Port");
})


// 1 Create /about route → send JSON

// app.get("/about", (res, req)=>{
//     req.json({
//         name : "Hemant",
//         age: "21"
//     })
// })


// 2 Create /contact route → GET

// app.get("/contact", (req, res)=>{
//     res.send("Contact Number Here Avaliable Now");
// })

// 3 Create /register route → POST

// app.post('/register', (req, res) => {
//   res.send('Register route hit!');
// });


let product = [
    {id:1, name: "hemant", age: 21},
    {id:2, name: "raghav", age: 22},
    {id:3, name: "Jayesh", age: 19}
]


app.get("/view", (req, res)=>{
    let data =    product
    res.json({
    product
    })
})

