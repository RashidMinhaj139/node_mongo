import express from "express";
import user from "./users.js";
import product from "./product.js";
import upload from "./upload.js";
// import getUser from "./users.js";
const router = express.Router();

// router.get("/getUser", getUser);
router.get("/product", product);
router.post("/upload", upload);
router.post("/user", user)

export default router;
