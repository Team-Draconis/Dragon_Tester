const mongoose = require("mongoose");

const CodingTestSchema = new mongoose.Schema({
  candidate_email: {
    type: String,
  },
  code: {
    type: String,
  },
});

module.exports =
  mongoose.models.CodingTest || mongoose.model("CodingTest", CodingTestSchema);
