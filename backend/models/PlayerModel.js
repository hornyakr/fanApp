import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Player = db.define(
  "Player",
  {
    firstName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    birthday: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    nationality: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    jerseyNumber: {
      type: Sequelize.INTEGER(3),
      allowNull: false,
    },
    post: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
    },
    TeamId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "players",
  }
);

export default Player;
