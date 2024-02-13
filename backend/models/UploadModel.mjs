import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
  },
  },
  { timestamps: true }
);

export default mongoose.model("Upload", uploadSchema);