import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import { handleError } from "./middlewares/errorHandler";
import router from "./routers/router";

const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(handleError);

export default app;
