import bcrypt from "bcryptjs/dist/bcrypt.js";

import Event from "../models/EventModel.js";
import Location from "../models/LocationModel.js";
import Match from "../models/MatchModel.js";
import Notification from "../models/NotificationModel.js";
import Player from "../models/PlayerModel.js";
import PlayerStatistic from "../models/PlayerStatisticModel.js";
import Team from "../models/TeamModel.js";
import User from "../models/UserModel.js";
import { db } from "./db.js";

Player.hasMany(Event);
Match.hasMany(Event);
Location.hasMany(Match);
Team.hasMany(Match, {
  foreignKey: "DomesticId",
});
Team.hasMany(Match, {
  foreignKey: "GuestId",
});
User.hasMany(Notification);
Match.hasMany(Notification);
Team.hasMany(Player);
Player.hasMany(PlayerStatistic);
Match.hasMany(PlayerStatistic);
Team.hasMany(User, {
  foreignKey: "Favourite",
});

db.sync({ force: true }).then(() => {
  Location.create({
    name: "Audi Aréna Győr",
    country: "Hu",
    city: "Győr",
    postalCode: 9027,
    address: "Tóth László utca 1.",
  }).catch((e) => {
    console.log(e);
  });

  Team.create({
    name: "Győri Audi ETO KC",
    color: "008000",
    logo: "eto-logo.png",
  }).catch((e) => {
    console.log(e);
  });
  Team.create({
    name: "Ferencvárosi TC",
    color: "ffffff",
    logo: "ferencvaros-logo.jpg",
  }).catch((e) => {
    console.log(e);
  });

  Match.create({
    date: new Date(2022, 3, 3, 15, 0),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 3, 19, 15, 0),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 3, 19, 20, 15),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 3, 19, 10, 0),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 3, 19, 21, 0),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 3, 25, 10, 10),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });
  Match.create({
    date: new Date(2022, 4, 4, 1, 0),
    LocationId: 1,
    DomesticId: 1,
    GuestId: 2,
  }).catch((e) => {
    console.log(e);
  });

  User.create({
    email: "admin@admin.hu",
    password: bcrypt.hashSync("IamTheAdmin25", 8),
    firstName: "Admin",
    lastName: "App",
  }).catch((e) => {
    console.log(e);
  });
  User.create({
    email: "firstuser@admin.hu",
    password: bcrypt.hashSync("IamTheAdmin25", 8),
    firstName: "First",
    lastName: "User",
    Favourite: 1,
  }).catch((e) => {
    console.log(e);
  });

  Player.create({
    firstName: "Laura",
    lastName: "Glauser",
    birthday: new Date(1990, 1, 1),
    nationality: "magyar",
    jerseyNumber: 1,
    post: "csatár",
    image: "LauraGlauser.png",
    TeamId: 1,
  }).catch((e) => {
    console.log(e);
  });
  Player.create({
    firstName: "Eszter",
    lastName: "Ogonovszky",
    birthday: new Date(1990, 1, 1),
    nationality: "magyar",
    jerseyNumber: 4,
    post: "csatár",
    image: "EszterOgonovszky.png",
    TeamId: 1,
  }).catch((e) => {
    console.log(e);
  });
  Player.create({
    firstName: "Linn",
    lastName: "Blohm",
    birthday: new Date(1990, 1, 1),
    nationality: "magyar",
    jerseyNumber: 5,
    post: "csatár",
    image: "LinnBlohm.png",
    TeamId: 1,
  }).catch((e) => {
    console.log(e);
  });
  Player.create({
    firstName: "Nadine",
    lastName: "Schatzl",
    birthday: new Date(1990, 1, 1),
    nationality: "magyar",
    jerseyNumber: 6,
    post: "csatár",
    image: "NadineSchatzl.png",
    TeamId: 1,
  }).catch((e) => {
    console.log(e);
  });

  Event.create({
    name: "védés",
    domestic: true,
    time: 26,
    PlayerId: 2,
    MatchId: 1,
  }).catch((e) => {
    console.log(e);
  });
  Event.create({
    name: "lövés",
    domestic: false,
    time: 26,
    PlayerId: 2,
    MatchId: 1,
  }).catch((e) => {
    console.log(e);
  });

  PlayerStatistic.create({
    PlayerId: 1,
    MatchId: 1,
  }).catch((e) => {
    console.log(e);
  });
});
