import Sequelize from "sequelize";

import { db } from "../config/db.js";

const User = db.define(
  "User",
  {
    email: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        isLowercase: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    Favourite: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "users",
  }
);

export default User;
