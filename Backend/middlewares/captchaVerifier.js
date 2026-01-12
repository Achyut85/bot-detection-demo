export const captchaVerifier = (req, res, next) => {
  const captchaToken = req.headers["x-captcha-token"];

  // If risk score is high, require CAPTCHA
  if (req.riskScore >= 3) {
    if (!captchaToken || captchaToken !== "verified") {
      return res.status(401).json({
        message: "CAPTCHA required",
        requireCaptcha: true
      });
    }
  }

  next();
};
