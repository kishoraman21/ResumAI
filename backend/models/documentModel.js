const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  jobTitle: {
    type: String,
    required: true,
  },

  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      institution: { type: String, required: true },
      year: { type: String, required: true },
    },
  ],

  skills: [
    {
      skillname: { type: String, required: true },
      experience: { type: String, required: true },
    },
  ],
  projects: [String],

  finalContent: { type: String, required: true},
});

const documentModel = mongoose.model("Documents", documentSchema)

module.exports = documentModel
