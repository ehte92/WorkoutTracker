require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const workoutRoutes = require("./routes/workouts");

//middlewares
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${req.ip} ${new Date()}`);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen to port
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to database & Server started at http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
