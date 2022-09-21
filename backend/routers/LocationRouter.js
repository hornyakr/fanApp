import express from "express";
import expressAsyncHandler from "express-async-handler";

import Location from "../models/LocationModel.js";

const locationRouter = express.Router();

locationRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    res.send(await Location.findAll({ where: { id: req.params.id } }));
  })
);

locationRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    res.send(await Location.findAll());
  })
);

export default locationRouter;
