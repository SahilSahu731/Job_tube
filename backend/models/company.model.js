import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description : {
    type: String
  },
  location: {
    type: String,
  },
  website: {
    type: String
  },
  logo: {
    type: String, // URL or path to the logo image
  },
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, // Reference to the User who created the company
  },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Company = mongoose.model("Company", companySchema);

export default Company;
// This code defines a Mongoose schema and model for a Company in a MongoDB database.
// The schema includes fields for name, location, website, industry, size, and a reference to the user who created it.
// The model is then exported for use in other parts of the application.