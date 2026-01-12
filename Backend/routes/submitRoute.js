import express from "express";
import { botDetector } from "../middlewares/botDetector.js";
import { captchaVerifier } from "../middlewares/captchaVerifier.js";

const router = express.Router();

router.post(
  "/submit",
  botDetector,
  captchaVerifier,
  (req, res) => {
    res.json({ message: "Request accepted (human verified)" });
  }
);

export default router;
