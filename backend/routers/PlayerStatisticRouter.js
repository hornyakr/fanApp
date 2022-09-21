import express from "express";
import expressAsyncHandler from "express-async-handler";

import PlayerStatistic from "../models/PlayerStatisticModel.js";

const playerStatisticRouter = express.Router();

playerStatisticRouter.get(
  "/byMatchAndPlayer:matchId&:playerId",
  expressAsyncHandler(async (req, res) => {
    res.send(
      await PlayerStatistic.findAll({
        where: { MatchId: req.params.matchId, PlayerId: req.params.playerId },
      })
    );
  })
);

export default playerStatisticRouter;
