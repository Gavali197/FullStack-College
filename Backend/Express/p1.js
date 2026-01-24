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


app.use(express.json());

let product = [
  { id: 1, name: "hemant", age: 21 },
  { id: 2, name: "raghav", age: 22 },
  { id: 3, name: "Jayesh", age: 19 }
];

// GET – View all products
app.get("/view", (req, res) => {
  res.json(product);
});

// POST – Add new product
app.post("/view", (req, res) => {
  const newProduct = req.body;

  product.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product
  });
});

// DELETE – Remove product by id
app.delete("/view/:id", (req, res) => {
  const id = parseInt(req.params.id);

  product = product.filter(p => p.id !== id);

  res.json({
    message: "Product deleted successfully",
    product
  });
});