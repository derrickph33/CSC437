import { Schema, model } from "mongoose";
import { Player } from "../models/player";

const PlayerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    jerseyNumber: { type: String, required: true, trim: true },
    team: { type: String, required: true, trim: true },
    gamesPlayed: { type: String, required: true, trim: true },
    receptions: { type: String, required: true, trim: true },
    receivingYards: { type: String, required: true, trim: true },
    receivingTouchdowns: { type: String, required: true, trim: true },
    fantasyPoints: { type: String, required: true, trim: true }
  },
  { collection: "players" }
);

const PlayerModel = model<Player>(
  "Player",
  PlayerSchema
);

function index(): Promise<Player[]> {
  return PlayerModel.find();
}

function get(name: String): Promise<Player> {
  return PlayerModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found`;
    });
}

export default { index, get };
