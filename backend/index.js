import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRuter from "./Routes/userRouter.js";
import messageRouter from "./Routes/messageRouter.js";


// Env Config
dotenv.config();

// App Config
const app = express();

app.use(bodyParser.json());
app.use(cors());


//APP Route

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})
app.use("/user", userRuter);
app.use("/message", messageRouter);

// DB Config
mongoose.connect(process.env.MONODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Database Connected")).catch(err => console.log(err));





// App Listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})