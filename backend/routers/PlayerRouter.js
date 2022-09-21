import express from "express";
import expressAsyncHandler from "express-async-handler";

import Player from "../models/PlayerModel.js";

const playerRouter = express.Router();

playerRouter.get(
  "/byTeam:teamId",
  expressAsyncHandler(async (req, res) => {
    res.send(await Player.findAll({ where: { TeamId: req.params.teamId } }));
  })
);

playerRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    res.send(await Player.findByPk(req.params.id));
  })
);

export default playerRouter;
