import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    // Extract user details from the request body
    const { fullName, email, phoneNumber, password, role } = req.body;

    // Check if all required fields are provided
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }
    // Check if the user already exists
    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } 
};

export const login = async (req, res) => {
  try {

    // Extract email and password from the request body
    const { email, password, role } = req.body;


    // Check if all required fields are provided
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Email, password, and role are required"
      });
    }


    // Check if the user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }
    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Check if the user role matches
    if (user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    }

    // Generate a JWT token
    const tokenData = {
        userId: user._id,
    }

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d" // Token expiration time
    });

    user = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile || {},
    }

    return res.status(200).cookie("token", token, { maxAge: 1* 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
      success: true,
      message: `Welcome back ${user.fullName}`,
        user
    });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    // Clear the cookie by setting its maxAge to 0
    return res.status(200).cookie("token", "", { maxAge: 0}).json({
      success: true,
      message: "Logout successful"
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateProfile = async (req, res) => {
  try {

    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file; // Assuming you're using multer for file uploads

    // Validate the request body
    if (!fullName || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    //cloudinary upload logic can be added here if you want to handle profile picture uploads

    const skillsArray = skills.split(",")

    const userId = req.id  //middleware should set req.id to the authenticated user's ID

    // Find the user by ID and update their profile
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    user.fullName = fullName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.bio = bio;
    user.skills = skillsArray;

    // If the user has a profile, update it; otherwise, create a new one

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile || {},
    };

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user
    });


  } catch (error) {
    console.error("Error during profile update:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
