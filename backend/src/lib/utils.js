import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Only true in production
    sameSite: "None", // ✅ Needed for cross-site (Render frontend + backend)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
