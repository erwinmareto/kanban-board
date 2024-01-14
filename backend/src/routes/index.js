const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const cardRoutes = require("./cardRoutes");
const taskRoutes = require("./taskRoutes");
const teamRoutes = require("./teamRoutes");

router.use("/auth", authRoutes)
router.use("/users", userRoutes);
router.use("/cards", cardRoutes);
router.use("/tasks", taskRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
