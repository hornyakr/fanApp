import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Match = db.define(
  "Match",
  {
    domesticGoals: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    guestGoals: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    elapsedTime: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    end: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    LocationId: {
      type: Sequelize.INTEGER,
    },
    DomesticId: {
      type: Sequelize.INTEGER,
    },
    GuestId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "matches",
  }
);

export default Match;
