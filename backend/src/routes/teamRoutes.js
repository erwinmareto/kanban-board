const express = require("express");
const router = express.Router();
const TeamController = require("../controllers/teamController");

router.get("/", TeamController.getAllTeams);
router.get("/all/tasks", TeamController.getEverything);
router.get("/:id", TeamController.getById);
router.get("/user/:userId", TeamController.getByUserId);
router.get("/team/:teamName", TeamController.getByTeamName);
router.get("/all/tasks/:id", TeamController.getEverythingById);
router.get("/user/:userId/tasks", TeamController.getEverythingByUserId);
router.post("/", TeamController.add);
router.put("/:id", TeamController.update);
router.delete("/:id", TeamController.delete);

module.exports = router;
