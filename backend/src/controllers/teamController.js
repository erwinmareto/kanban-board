const TeamService = require("../services/teamService");

class TeamController {
  static getAllTeams = async (req, res, next) => {
    try {
      const teams = await TeamService.getAll();
      return res
        .status(200)
        .json({ message: "Successfully retrieved teams data", data: teams });
    } catch (error) {
      next(error);
    }
  };

  static getEverything = async (req, res, next) => {
    try {
      const teams = await TeamService.getEverything();
      return res
        .status(200)
        .json({ message: "Successfully retrieved teams data", data: teams });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const team = await TeamService.getById(id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved team data", data: team });
    } catch (error) {
      next(error);
    }
  };

  static getByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const team = await TeamService.getByUserId(userId);
      return res
        .status(200)
        .json({ message: "Successfully retrieved team data", data: team });
    } catch (error) {
      next(error);
    }
  }

  static getByTeamName = async (req, res, next) => {
    try {
      const { teamName } = req.params;
      const team = await TeamService.getByteamName(teamName);
      return res
        .status(200)
        .json({ message: "Successfully retrieved team data", data: team });
    } catch (error) {
      next(error)
    }
  }

  static getEverythingById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const team = await TeamService.getEverythingById(id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved team data", data: team });
    } catch (error) {
      next(error);
    }
  };

  static getEverythingByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const team = await TeamService.getEverythingByUserId(userId);
      return res
        .status(200)
        .json({ message: "Successfully retrieved team data", data: team });
    } catch (error) {
      next(error);
    }
  }

  static add = async (req, res, next) => {
    try {
      const team = await TeamService.add(req.body);
      return res
        .status(201)
        .json({ message: "Successfully created team", data: team });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const team = await TeamService.update(id, req.body);
      return res
        .status(200)
        .json({ message: "Successfully updated team", data: team });
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const team = await TeamService.delete(id);
      return res
        .status(200)
        .json({ message: "Successfully deleted team", data: team });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = TeamController;
