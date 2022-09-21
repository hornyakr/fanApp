import express from "express";
import expressAsyncHandler from "express-async-handler";

import Event from "../models/EventModel.js";

const eventRouter = express.Router();

eventRouter.get(
  "/byMatch:matchId",
  expressAsyncHandler(async (req, res) => {
    res.send(await Event.findAll({ where: { MatchId: req.params.matchId } }));
  })
);

export default eventRouter;
