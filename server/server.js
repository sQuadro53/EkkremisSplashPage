const path = require("path");
const express = require("express");
const app = express();
const apiRouter = require(path.join(__dirname, "/routes/demoAPI"));

const PORT = 3000;

// response body
app.use(express.json());
// image handler
app.use(express.urlencoded({ extended: true }));

// to statically present the build
app.use(express.static(path.join(__dirname, "../dist/")));

// route handler
app.use("/demo", apiRouter);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
