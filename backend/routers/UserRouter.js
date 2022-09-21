import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs/dist/bcrypt.js";

import User from "../models/UserModel.js";
import * as auth from "../config/userAuthentication.js";

const userRouters = express.Router();

userRouters.post(
  "/signIn",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          favourite: user.favourite,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          token: auth.generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Érvénytelen e-mail, vagy jelszó" });
  })
);

userRouters.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const now = new Date();
    const createdUser = await User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      createdAt: now,
    });
    if (createdUser) {
      res.send({
        id: createdUser.id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        favourite: createdUser.favourite,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
        token: auth.generateToken(createdUser),
      });
      return;
    }
    res.status(401).send({ message: "A felhasználó létrehozása sikertelen" });
  })
);

export default userRouters;
