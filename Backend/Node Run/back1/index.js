const express = require("express");
const mongoDb = require("./utils/Db");
const app = express();
// const cors = require("cors");
const route = require("./Routes/userRouter");

app.use(express.json());
app.use("/userlist/api/v2", route);

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server Running PORT ${PORT}`)
});

mongoDb()

// app.use(cors({
//     origin: "http://localhost:4000",
//     credentials:true
// }));