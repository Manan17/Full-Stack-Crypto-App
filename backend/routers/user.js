const express = require("express");
const { createUser, signIn } = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const {
  validateUserInfo,
  userValidateMessage,
  signInValidation,
} = require("../middlewares/validation/user");
const multer = require("multer");
const sharp = require("sharp");
const router = express.Router();
const User = require("../models/user");
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Invalid File Type", false);
  }
};

const uploads = multer({ storage, fileFilter });

const getNormalData = (req, res, next) => {
  req.on("data", (chunk) => {
    const data = JSON.parse(chunk);
    req.body = data;
    next();
  });
};

router.post(
  "/create-user",
  getNormalData,
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  validateUserInfo,
  userValidateMessage,
  createUser
);
router.post(
  "/sign-in",
  getNormalData,
  signInValidation,
  userValidateMessage,
  signIn
);
router.post(
  "/upload-profile",
  isAuth,
  express.json(),
  uploads.single("profile"),
  async (req, res) => {
    const { user } = req;
    if (!user)
      return res.status(401).json({
        success: false,
        message: "Unauthorized User",
      });
    try {
      const profileBuffer = req.file.buffer;
      const { width, height } = await sharp(profileBuffer).metadata();
      const avator = await sharp(profileBuffer)
        .resize(Math.round(width * 0.5), Math.round(height * 0.5))
        .toBuffer();
        console.log(user._id);
    await User.findByIdAndUpdate(user._id,{avator});
    res.status(201).json({
        success:true,
        message:"Your profile is updated"
    })

    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server Error",
      });
    }

    res.send("ok");
  }
);

module.exports = router;
