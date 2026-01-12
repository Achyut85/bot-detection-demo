export const botDetector = (req, res, next) => {
  const interactionTime = Number(req.headers["x-interaction-time"]);
  const userAgent = req.headers["user-agent"];

  let riskScore = 0;

  if (!userAgent) riskScore += 2;
  if (interactionTime && interactionTime < 1000) riskScore += 3;

  // Attach risk score to request
  req.riskScore = riskScore;

  next();
};
