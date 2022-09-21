import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Notification = db.define(
  "Notification",
  {
    email: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    UserId: {
      type: Sequelize.INTEGER,
    },
    MatchId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "notifications",
  }
);

export default Notification;
