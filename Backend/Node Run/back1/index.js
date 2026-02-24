const express = require("express");
const mongoDb = require("./utils/Db");
const app = express();
const cors = require("cors");
const route = require("./Routes/userRouter");
const errorhandler = require("./Middleware/error");

const PORT = 4000;

mongoDb();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(errorhandler)
app.use(express.json());
app.use("/userlist/api/v2", route);

app.listen(PORT, () => {
    console.log(`Server Running PORT ${PORT}`);
});
