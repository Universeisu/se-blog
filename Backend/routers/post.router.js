const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller")
const {upload} = require("../middlewares/file.middleware")
const authJwt = require("../middlewares/authJwt.middleware")

router.post("", authJwt.verifyToken, upload, postController.createPost);
module.exports = router;