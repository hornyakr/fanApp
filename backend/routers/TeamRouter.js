import express from "express";
import expressAsyncHandler from "express-async-handler";

import Team from "../models/TeamModel.js";

const teamRouter = express.Router();

teamRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.send(await Team.findAll());
  })
);

export default teamRouter;
