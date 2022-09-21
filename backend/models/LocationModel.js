import Sequelize from "sequelize";

import { db } from "../config/db.js";

const Location = db.define(
  "Location",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    postalCode: {
      type: Sequelize.INTEGER(8),
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "locations",
    charset: "utf8",
    collate: "utf8_unicode_ci",
  }
);

export default Location;
