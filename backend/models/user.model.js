import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String, 
    required: true,
  },
  lastlogin: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: String,
  resetPasswordExpireAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
}, { timestamps: true });

// 'createdAt' and 'updatedAt' fields will be automatically added to the document

export const User = mongoose.model('User', userSchema); // Fix the model creation
