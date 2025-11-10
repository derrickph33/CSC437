import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Players from "./services/player-svc";
import players from "./routes/players";
import auth, { authenticateUser } from "./routes/auth";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

// Middleware:
app.use(express.json());

app.use("/api/players", authenticateUser, players);
app.use("/auth", auth);

connect("FFL").then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});