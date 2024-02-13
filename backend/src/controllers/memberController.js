const MemberService = require("../services/memberService");

class MemberController {
  static getAllMembers = async (req, res, next) => {
    try {
      const members = await MemberService.getAll();
      return res.status(200).json({
        message: "Successfully retrieved team member data",
        data: members,
      });
    } catch (error) {
      next(error);
    }
  };

  static getMemberById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const member = await MemberService.getById(id);
      return res.status(200).json({
        message: "Successfully retrieved team member data",
        data: member,
      });
    } catch (error) {
      next(error);
    }
  };

  static getMembersByTeamId = async (req, res, next) => {
    try {
      const { teamId } = req.params;
      const member = await MemberService.getByTeamId(teamId);
      return res.status(200).json({
        message: "Successfully retrieved team member data",
        data: member,
      });
    } catch (error) {
      next(error);
    }
  };

  static getTeamsByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const member = await MemberService.getByUserId(userId);
      return res.status(200).json({
        message: "Successfully retrieved team member data",
        data: member,
      });
    } catch (error) {
      next(error);
    }
  };

  static addMember = async (req, res, next) => {
    try {
      const { teamId, userId } = req.body;
      const member = await MemberService.add(teamId, userId);
      return res
        .status(201)
        .json({ message: "Successfully created team data", data: member });
    } catch (error) {
      next(error);
    }
  };

  static updateMember = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { teamId, userId } = req.body;
      const member = await MemberService.update(id, teamId, userId);
      return res
        .status(200)
        .json({ message: "Successfully updated team data", data: member });
    } catch (error) {
      next(error);
    }
  };

  static deleteMember = async (req, res, next) => {
    try {
      const { id } = req.params;
      const member = await MemberService.delete(id);
      return res
        .status(200)
        .json({ message: "Successfully updated team data", data: member });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = MemberController;
