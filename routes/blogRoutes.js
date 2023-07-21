const express = require("express");
const router = express.Router();
const blogController = require("./../controllers/blogController");

// blog routes
router.get("/", blogController.blogIndex);
router.get("/create", blogController.blogCreate);
router.post("/", blogController.blogStore);
router.get("/:id", blogController.blogDetail);
router.delete("/:id", blogController.blogDelete);

module.exports = router;
