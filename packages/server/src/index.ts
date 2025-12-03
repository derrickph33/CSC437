import express, { Request, Response } from "express";
import fs from "node:fs/promises";
import path from "path";
import { connect } from "./services/mongo";
import Players from "./services/player-svc";
import players from "./routes/players";
import auth, { authenticateUser } from "./routes/auth";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.json());

app.use("/api/players", authenticateUser, players);
app.use("/auth", auth);

app.use(express.static(staticDir));

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

connect("FFL").then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});