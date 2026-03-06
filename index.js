import express from "express";
import { errorHandler } from "./common/helper/app-error.helper.js";
import { rootRouter } from "./router/root.router.js";

const app = express();

const PORT = process.env.PORT || 3069;

//body parser
app.use(express.json());

app.use("/api", rootRouter);

//global error handler
app.use(errorHandler);

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
});