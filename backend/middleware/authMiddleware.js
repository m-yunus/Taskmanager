const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use the same secret key
    req.user = decoded; // Attach decoded user data to request
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
