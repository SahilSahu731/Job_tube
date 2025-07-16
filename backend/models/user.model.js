import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "recruiter"],
    required: true,
  },
  profile: {
    bio : { type: String},
    skills: [{ type: String }],
    experience: { type: String},
    resume: { type: String }, // URL or path to the resume file
    resumeOriginalName: { type: String }, // Original name of the resume file
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" }, // Reference to the Company model
    profilePhoto: { type: String, default: "" }, // URL or path to the profile photo
  }
}, {
  timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
// This code defines a Mongoose schema and model for a User in a MongoDB database.
// The schema includes fields for name, email, and password, with validation rules.
// The model is then exported for use in other parts of the application.