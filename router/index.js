import express from "express";
import user from "./users.js";
import product from "./product.js";
import upload from "./upload.js";

const router = express.Router();

router.get("/user", user);
router.get("/product", product);
router.post("/upload", upload);

export default router;
