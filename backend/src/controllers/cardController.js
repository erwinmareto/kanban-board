const CardService = require("../services/cardService");

class CardController {
  static getAllCards = async (req, res, next) => {
    try {
      const cards = await CardService.getAll();
      return res
        .status(200)
        .json({ message: "Successfully retrieved cards data", data: cards });
    } catch (error) {
      next(error);
    }
  };

  static getEverything = async (req, res, next) => {
    try {
      const cards = await CardService.getEverything();
      return res
        .status(200)
        .json({ message: "Successfully retrieved cards data", data: cards });
    } catch (error) {
      next(error);
    }
  };

  static getEverythingByTeamId = async (req, res, next) => {
    try {
      const { teamId } = req.params;
      const cards = await CardService.getEverythingByTeamId(teamId);
      return res
        .status(200)
        .json({ message: "Successfully retrieved cards data", data: cards });
    } catch (error) {
      next(error);
    }
  };

  static getEverythingByTeamName = async (req, res, next) => {
    try {
      const { teamName } = req.params;
      const cards = await CardService.getEverythingByTeamName(teamName);
      return res
        .status(200)
        .json({ message: "Successfully retrieved cards data", data: cards });
    } catch (error) {
      next(error);
    }
  }

  static getCard = async (req, res, next) => {
    try {
      const card = await CardService.getCard(req.params.id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved card data", data: card });
    } catch (error) {
      next(error);
    }
  };

  static addCard = async (req, res, next) => {
    try {
      const card = await CardService.add(req.body);
      return res
        .status(201)
        .json({ message: "Successfully created card", data: card });
    } catch (error) {
      next(error);
    }
  };

  static updateCard = async (req, res, next) => {
    try {
      const { id } = req.params;
      const card = await CardService.update(id, req.body);
      return res
        .status(200)
        .json({ message: "Successfully updated card", data: card });
    } catch (error) {
      next(error);
    }
  };

  static deleteCard = async (req, res, next) => {
    try {
      const { id } = req.params;
      const card = await CardService.delete(id);
      return res
        .status(200)
        .json({ message: "Successfully deleted card", data: card });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CardController;
