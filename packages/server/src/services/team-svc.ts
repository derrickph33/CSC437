import { Schema, model } from "mongoose";
import { Team } from "../models/team";

const TeamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: false, trim: true, default: "" },
    defensiveRank: { type: String, required: false, trim: true, default: "N/A" },
    rankVsWRs: { type: String, required: false, trim: true, default: "N/A" }
  },
  { collection: "teams" }
);

const TeamModel = model<Team>(
  "Team",
  TeamSchema
);

function index(): Promise<Team[]> {
  return TeamModel.find();
}

function get(name: String): Promise<Team> {
  return TeamModel.find({ name })
    .then((list) => list[0])
    .catch((err) => {
      throw `${name} Not Found`;
    });
}

function create(json: Team): Promise<Team> {
  const t = new TeamModel(json);
  return t.save();
}

function update(
  name: String,
  team: Team
): Promise<Team> {
  return TeamModel.findOneAndUpdate({ name }, team, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated as Team;
  });
}

function remove(name: String): Promise<void> {
  return TeamModel.findOneAndDelete({ name }).then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };
