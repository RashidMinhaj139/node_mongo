import express from "express";
const router = express.Router();

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
router.get("/user", (req, res) => {
  res.status(200).send( users );
});

export default router;
