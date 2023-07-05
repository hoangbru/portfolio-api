import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import projectsRouter from './routes/projects.js'
import categoriesRouter from './routes/categories.js'
import technologiesRouter from './routes/technologies.js'
import userRouter from './routes/auth.js'
import {connectOnlDB} from './config/connect.js'

const app = express();
const port = 8080
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", projectsRouter);
app.use("/api", categoriesRouter);
app.use("/api", technologiesRouter);
app.use("/api", userRouter);

mongoose.set('strictQuery', false);
// mongodb local
// connectLocalDB();

// mongodb onl
connectOnlDB();
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })