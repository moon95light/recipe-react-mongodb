import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js'
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
// mongoose.connect("mongodb://localhost:27017/reactrecipe");

const dbUrl = 'mongodb://127.0.0.1:27017/reactrecipe';

mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.listen(3001, () => console.log("Server started..."));