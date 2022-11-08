const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express();
const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")
const productRoute = require("./routes/product.js")
const favoriteRoute = require("./routes/favorite.js")
const path = require("path")



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DBconnection successfully"))
  .catch((err) => console.log(err));

  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/products", productRoute)
app.use("/api/favorite", favoriteRoute)
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
