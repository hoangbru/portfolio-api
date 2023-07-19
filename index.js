import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { connectOnlDB } from "./config/connect.js";
import {
  categoriesRouter,
  externalRouter,
  infoRouter,
  projectsRouter,
  socialRouter,
  technologiesRouter,
  userRouter,
} from "./routes/index.js";

const app = express();
const port = 8080;
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api",
    projectsRouter,
    categoriesRouter,
    technologiesRouter,
    userRouter,
    infoRouter,
    socialRouter,
    externalRouter
);

mongoose.set("strictQuery", false);

// connect mongodb onl
connectOnlDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});