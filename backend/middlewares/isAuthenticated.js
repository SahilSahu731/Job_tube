import jwt from "jsonwebtoken";


const isAuthenticated = async (req, res, next) => {
  try {

    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token is missing"
      });
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode || !decode.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid authentication token"
      });
    }

    req.id = decode.userId;

    next();

  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(401).json({
      success: false,
      message: "Authentication failed"
    });
  }
};

export default isAuthenticated;




