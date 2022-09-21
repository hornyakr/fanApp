import "dotenv/config";
import express from "express";

import { db } from "./config/db.js";
import eventRouter from "./routers/EventRouter.js";
import locationRouter from "./routers/LocationRouter.js";
import matchRouter from "./routers/MatchRouter.js";
import playerRouter from "./routers/PlayerRouter.js";
import playerStatisticRouter from "./routers/PlayerStatisticRouter.js";
import teamRouter from "./routers/TeamRouter.js";
import userRouter from "./routers/UserRouter.js";

//Start server
const app = express();

//Test db
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Error: ${err}`));

//Creating db !!!DROP DATABASE!!!SAVE DB BEFORE!!!
/* import "./config/creatingDb.js"; */

//Middleware
app.use(express.static("react"));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("/index.html");
});

app.use("/api/users", userRouter);
app.use("/api/matches", matchRouter);
app.use("/api/teams", teamRouter);
app.use("/api/events", eventRouter);
app.use("/api/players", playerRouter);
app.use("/api/locations", locationRouter);
app.use("/api/playerStatistics", playerStatisticRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  });
});

//Server params
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
