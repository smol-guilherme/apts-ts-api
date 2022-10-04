import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import { handleError } from "./middlewares/errorHandler";
import postRouter from "./routers/postRouter";
import authRouter from "./routers/authRouter";

const app = express();

app.use(json());
app.use(cors());
app.use(authRouter);
app.use(postRouter);
app.use(handleError);

export default app;
