const app = require("./app");
const mongoDb = require("./db");


mongoDb();
const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server are Runnig ${PORT}`);
})
