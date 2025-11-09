import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Players from "./services/player-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get("/players", (req: Request, res: Response) => {
  Players.index().then((data) => {
    res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
  });
});

app.get("/players/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  Players.get(name).then((data) => {
    if (data) res
      .set("Content-Type", "application/json")
      .send(JSON.stringify(data));
    else res
      .status(404).send();
  });
});

connect("FFL").then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});