import { Schema, model } from "mongoose";
import { Player } from "../models/player";

const PlayerSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: false, trim: true, default: "" },
    position: { type: String, required: false, trim: true, default: "Wide Receiver" },
    jerseyNumber: { type: String, required: false, trim: true, default: "" },
    team: { type: String, required: false, trim: true, default: "" },
    gamesPlayed: { type: String, required: false, trim: true, default: "0" },
    receptions: { type: String, required: false, trim: true, default: "0" },
    receivingYards: { type: String, required: false, trim: true, default: "0" },
    receivingTouchdowns: { type: String, required: false, trim: true, default: "0" },
    fantasyPoints: { type: String, required: false, trim: true, default: "0" }
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

function create(json: Player): Promise<Player> {
  const t = new PlayerModel(json);
  return t.save();
}

function update(
  name: String,
  player: Player
): Promise<Player> {
  return PlayerModel.findOneAndUpdate({ name }, player, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated as Player;
  });
}

function remove(name: String): Promise<void> {
  return PlayerModel.findOneAndDelete({ name }).then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };
