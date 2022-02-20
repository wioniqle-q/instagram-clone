import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";


// Env Config
dotenv.config();

// App Config
const app = express();

app.use(bodyParser.json());
app.use(cors());


// DB Config
mongoose.connect(process.env.MONODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})





// App Listen
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})