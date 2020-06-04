const mongoose = require("mongoose");

const CodeTestSchema = new mongoose.Schema({
  candidate_email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  city: {
    type: String,
  },
  codes: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.CodeTest || mongoose.model("CodeTest", CodeTestSchema);
