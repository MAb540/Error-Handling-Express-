import express from "express";

import signupRouter from "./routes/signup";
import { errorHandler } from "./Utility/error-handler";
import { NotFoundError } from "./Utility/not-found-error";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.use(signupRouter);

app.all("*", async (req, res, next) => {
  //throw new NotFoundError();  sync way
  next(new NotFoundError()); // when using async/await in a function
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log("Auth Server is running on port: ", PORT));
