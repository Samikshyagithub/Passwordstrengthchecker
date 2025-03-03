const express = require("express");
const cors = require("cors");
const { checkPasswordStrength } = require("./passwordstrength");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for password strength check
app.post("/check-password", (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  const strengthResult = checkPasswordStrength(password);
  res.json(strengthResult);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
