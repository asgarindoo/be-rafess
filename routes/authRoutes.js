import express from "express";
import { loginWithX, callbackFromX } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", loginWithX);
router.get("/callback", callbackFromX);

export default router;
