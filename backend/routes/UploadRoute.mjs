import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { Router } from "express";
import uploadMiddleware from "../middlewares/MulterMiddleware.mjs";
import Upload from "../models/UploadModel.mjs";
import protect from "../middlewares/authMiddleware.mjs";

const getAllPhotos = async (req, res) => {
  try {
    const filter = { user: req.user };
    const allPhotos = await Upload.find(filter).sort({ createdAt: "descending" });
    res.send(allPhotos);
  } catch (err) {
    console.log(err);
    res.status(500).send({msg:"Error fetching photos."});
  }
};

const uploadPic = async (req, res) => {
  try {
    const uploadedPhoto = await Upload.create({ photo: req.file.filename, user: req.user });
    res.send(uploadedPhoto);
  } catch (err) {
    console.log(err);
    res.status(500).send({msg:"Error uploading picture."});
  }
};

const deletePic = async (req, res) => {
  const photoId = req.params.id;

  try {
    const photo = await Upload.findById(photoId);
    if (!photo) {
      return res.status(404).send("Photo not found");
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, '..','public', 'uploads', photo.photo);
    await fs.unlink(filePath);

    await Upload.findByIdAndDelete(photoId);

    res.status(201).send({msg:"Photo deleted successfully", photoId: photoId });
  } catch (err) {
    console.log(err);
    res.status(500).send({msg:"Error deleting photo."});
  }
};

const router = Router();

router.get("/get", protect, getAllPhotos);
router.post("/save", protect, uploadMiddleware.single("photo"), uploadPic);
router.delete("/delete/:id", protect, deletePic);

export default router;
