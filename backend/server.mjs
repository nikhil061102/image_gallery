import express from "express";
const app = express();
app.use(express.json());
app.use(express.static("public"));

import cookieParser from 'cookie-parser';
app.use(cookieParser());

import connectDB from "./config/db.mjs";
connectDB();

import UploadRoute from "./routes/UploadRoute.mjs";
app.use("/api", UploadRoute);
import userRoutes from './routes/userRoutes.mjs'
app.use("/user", userRoutes);

app.get('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect('/');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started at http://127.0.0.1:${PORT}`);
});
