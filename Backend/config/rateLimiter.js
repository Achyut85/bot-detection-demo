import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 50, // max requests per IP
  message: "Too many requests. Please slow down."
});
