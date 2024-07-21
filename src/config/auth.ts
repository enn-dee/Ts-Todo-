import jwt from "jsonwebtoken";

const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_KEY!, { expiresIn: "1h" });
};

const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.JWT_KEY!, (err: any, user: any) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
};

export { generateToken, authenticateToken };
