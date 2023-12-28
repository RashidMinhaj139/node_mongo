import express from "express";
const router = express.Router();

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
  },
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
  },
];
router.get("/product", (req, res) => {
  res.status(200).send(products);
});

export default router;
