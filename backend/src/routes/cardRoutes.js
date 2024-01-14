const express = require("express");
const router = express.Router();
const CardController = require("../controllers/cardController");

router.get("/", CardController.getAllCards);
router.get("/:id", CardController.getCard);
router.get("/all/tasks", CardController.getEverything);
router.get("/all/tasks/id/:teamId", CardController.getEverythingByTeamId);
router.get("/all/tasks/name/:teamName", CardController.getEverythingByTeamName);
router.post("/", CardController.addCard);
router.put("/:id", CardController.updateCard);
router.delete("/:id", CardController.deleteCard);

module.exports = router;
