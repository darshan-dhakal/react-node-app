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
const userRoute = require('./routes/user')

app.use(express.json())
//database seeder routes
app.use('/api/seed', databaseSeeder)

//routes for user
app.use('/api/users', userRoute)



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

// echo "# react-node-app" >> README.md
// git init
// git add README.md
// git commit - m "first commit"
// git branch - M main
// git remote add origin https://github.com/darshan-dhakal/react-node-app.git
// git push - u origin main

