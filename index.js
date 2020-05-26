import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 3000;

//Connect to MongoDB
mongoose
  .connect("mongodb://localhost/crm_db")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

routes(app);

app.get("/", (req, res) => {
  res.send(`App running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App listen to port ${PORT}`);
});
