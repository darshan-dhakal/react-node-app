const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const products = require('./data/products');
const app = express();

dotenv.config();
const PORT = process.env.PORT;
const MONGOOSEDB_URL = process.env.MONGOOSEDB_URL;

mongoose.connect(MONGOOSEDB_URL).then(() => console.log("db connected")).then((err) => {
  err;
})



const databaseSeeder = require('./databaseSeeder')
//database seeder routes
app.use('/api/seed', databaseSeeder)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});










//darshandhakal77
//8h9ih3V5vXhmpVl9
//mongodb+srv://darshandhakal77:8h9ih3V5vXhmpVl9@cluster0.tvojy.mongodb.net/react-node-app

//api product test route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((product) => product.id === req.params.id)
//   res.json(product);
// });