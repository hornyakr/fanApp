import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Event = db.define(
  "Event",
  {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    domestic: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    time: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    PlayerId: {
      type: Sequelize.INTEGER,
    },
    MatchId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "events",
  }
);

export default Event;
