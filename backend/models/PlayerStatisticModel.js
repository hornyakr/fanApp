import Sequelize from "sequelize";

import { db } from "../config/db.js";

const PlayerStatistic = db.define(
  "PlayerStatistic",
  {
    incomingShots: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    defenses: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    playTime: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    redCards: {
      type: Sequelize.INTEGER(2),
      defaultValue: 0,
    },
    yellowCards: {
      type: Sequelize.INTEGER(2),
      defaultValue: 0,
    },
    twoMetersExhibition: {
      type: Sequelize.INTEGER(2),
      defaultValue: 0,
    },
    shots: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    avaragePulse: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    goals: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    sevenMetersGoals: {
      type: Sequelize.INTEGER(3),
      defaultValue: 0,
    },
    sevenMetersDefenses: {
      type: Sequelize.INTEGER(3),
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
    tableName: "playerStatistics",
  }
);

export default PlayerStatistic;
