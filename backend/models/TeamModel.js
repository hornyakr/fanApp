import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Team = db.define(
  "Team",
  {
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING(6),
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "teams",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

export default Team;
