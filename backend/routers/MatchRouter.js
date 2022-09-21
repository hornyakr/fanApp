import express from "express";
import expressAsyncHandler from "express-async-handler";

import Match from "../models/MatchModel.js";

const matchRouter = express.Router();

matchRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.send(await Match.findAll());
  })
);

matchRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    res.send(await Match.findAll({ where: { id: req.params.id } }));
  })
);

export default matchRouter;
