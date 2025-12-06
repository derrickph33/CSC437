import express, { Request, Response } from "express";
import { Team } from "../models/team";

import Teams from "../services/team-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Teams.index()
    .then((list: Team[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  Teams.get(name)
    .then((team: Team) => {
      if (team) {
        res.json(team);
      } else {
        res.status(404).send({ error: `Team ${name} not found` });
      }
    })
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newTeam = req.body;

  Teams.create(newTeam)
    .then((team: Team) =>
      res.status(201).json(team)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:name", (req: Request, res: Response) => {
  const { name } = req.params;
  const newTeam = req.body;

  Teams.update(name, newTeam)
    .then((team: Team) => res.json(team))
    .catch((err) => res.status(404).end());
});

router.delete("/:name", (req: Request, res: Response) => {
  const { name } = req.params;

  Teams.remove(name)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;
