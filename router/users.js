import express from "express";
const router = express.Router();
import User from "../models/User.js";
const users = [
  {
    id: 1,
    name: "rashid",
    email: "rashid@gmail.com",
  },
  {
    id: 2,
    name: "rashid2",
    email: "rashid2@gmail.com",
  },
];
// router.get("/user", (req, res) => {
//   res.status(200).send(users);
// });

router.post("/user", async (req, res) => {
  console.log("req===>", req.body);
  try {
    const user = new User(req.body);
      await user.save();
    return res.status(200).send({ message: "user created" });
  } catch (error) {
    return res.status(400).send({ message: "error" });
  }
});




export default router;
