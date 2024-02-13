const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/memberController");

router.get("/", MemberController.getAllMembers);
router.get("/id/:id", MemberController.getMemberById);
router.get("/teams/:teamId", MemberController.getMembersByTeamId);
router.get("/users/:userId", MemberController.getTeamsByUserId);
router.post("/", MemberController.addMember);
router.put("/:id", MemberController.updateMember);
router.delete("/:id", MemberController.deleteMember);

module.exports = router;
