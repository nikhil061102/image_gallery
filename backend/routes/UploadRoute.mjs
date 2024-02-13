import { Router } from "express";
import uploadMiddleware from "../middlewares/MulterMiddleware.mjs";
import Upload from "../models/UploadModel.mjs";
import protect from "../middlewares/authMiddleware.mjs";

const getAllPhotos = async (req, res) => {
  const filter = {user: req.user};
  const allPhotos = await Upload.find(filter).sort({ createdAt: "descending" });
  res.send(allPhotos);
};

const uploadPic =  (req, res) => {
  Upload.create({photo:req.file.filename, user: req.user})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
};

const router = Router();

router.get("/api/get", protect, getAllPhotos);
router.post("/api/save", protect, uploadMiddleware.single("photo"), uploadPic);

export default router;
