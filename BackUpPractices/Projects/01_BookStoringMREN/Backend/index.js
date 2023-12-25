import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow all origins with default of cors();
app.use(cors());

// Option 2 : Allow Custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Road to success");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Application is running to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
