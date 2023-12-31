//class 52
// import axios from "axios";
import express, { query } from "express";
import cors from "cors";
import router from "./router/index.js";
// import mongoose from "mongoose";
import mongoose from "./db/index.js";
const app = express();
const PORT = process.env.PORT || 8000;

//db
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

//db

// const users = [
//   {
//     id: 1,
//     name: "rashid",
//     email: "rashid@gmail.com",
//   },
//   {
//     id: 2,
//     name: "rashid2",
//     email: "rashid2@gmail.com",
//   },
// ];
// const orders = [
//   {
//     name: "ghous",
//     email: "ghous@gmail.com",
//     phone: 1234,
//   },
// ];
app.use(express.json());
app.use(cors());

//middlware
// app.use("/", (req, res, next) => {
//   console.log("request agai......>", req.query);
//   if (req?.query?.apikey === "123") {
//     next();
//   } else {
//     res.status(401).send({ messgae: "not allowed" });
//   }
// });
app.use("/api", router);
// axios
//   .post("http://localhost:8000/user", {
//     id: users.length + 1,
//     name: "ghous",
//     email: "ghous@gmai.com",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// axios
//   .post("http://localhost:8000/order", { orders })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// // for delete
// axios
//   .delete("http://localhost:8000/users/3")
//   .then((res) => console.log(res))
//   .then((err) => console.log(err));

// axios
//   .put("http://localhost:8000/user/1", {
//     id: 1,
//     name: "khan",
//     email: "khan@gmail.com",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// app.get("/users", (req, res) => {
//   console.log("users fetched successfully");
//   res.send(users);
// });

// app.post("/user", (req, res) => {
//   const { name, email } = req.body;

//   if (name && email) {
//     users.push(req.body);
//     res.status(200).end({ status: 200, message: "user added successfully" });
//   } else {
//     res
//       .status(403)
//       .send({ status: 403, message: "Name & Email are required  " });
//   }
// });

// //order api
// app.post("/order", (req, res) => {
//   console.log("order details===>", req.body);
//   res.send({ message: "ordrer placed" });
// });

// // delete
// app.delete("/users/:id", (req, res) => {
//   let index = users.findIndex((v) => v.id === Number(req.params.id));
//   users.splice(index, 1);
//   res.send({ message: "user deleted..." });
// });

// // put
// app.put("/user/:id", (req, res) => {
//   let index = users.findIndex((v) => v.id === Number(req.params.id));
//   users[index] = req.body;
//   res.send({ message: "user updated succssfully" });
// });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
