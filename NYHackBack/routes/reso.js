const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { requireSignin, isAuth } = require("../controllers/auth");
const { create, allresos } = require("../controllers/reso");

router.post("/reso/create/:userId", requireSignin, isAuth, create);
router.get("/getresos", allresos);

router.param("userId", userById);

module.exports = router;
