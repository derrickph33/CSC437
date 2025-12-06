"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var team_svc_exports = {};
__export(team_svc_exports, {
  default: () => team_svc_default
});
module.exports = __toCommonJS(team_svc_exports);
var import_mongoose = require("mongoose");
const TeamSchema = new import_mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: false, trim: true, default: "" },
    defensiveRank: { type: String, required: false, trim: true, default: "N/A" },
    rankVsWRs: { type: String, required: false, trim: true, default: "N/A" }
  },
  { collection: "teams" }
);
const TeamModel = (0, import_mongoose.model)(
  "Team",
  TeamSchema
);
function index() {
  return TeamModel.find();
}
function get(name) {
  return TeamModel.find({ name }).then((list) => list[0]).catch((err) => {
    throw `${name} Not Found`;
  });
}
function create(json) {
  const t = new TeamModel(json);
  return t.save();
}
function update(name, team) {
  return TeamModel.findOneAndUpdate({ name }, team, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated;
  });
}
function remove(name) {
  return TeamModel.findOneAndDelete({ name }).then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}
var team_svc_default = { index, get, create, update, remove };
