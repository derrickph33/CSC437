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
var player_svc_exports = {};
__export(player_svc_exports, {
  default: () => player_svc_default
});
module.exports = __toCommonJS(player_svc_exports);
var import_mongoose = require("mongoose");
const PlayerSchema = new import_mongoose.Schema(
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
const PlayerModel = (0, import_mongoose.model)(
  "Player",
  PlayerSchema
);
function index() {
  return PlayerModel.find();
}
function get(name) {
  return PlayerModel.find({ name }).then((list) => list[0]).catch((err) => {
    throw `${name} Not Found`;
  });
}
function create(json) {
  const t = new PlayerModel(json);
  return t.save();
}
function update(name, player) {
  return PlayerModel.findOneAndUpdate({ name }, player, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${name} not updated`;
    else return updated;
  });
}
function remove(name) {
  return PlayerModel.findOneAndDelete({ name }).then(
    (deleted) => {
      if (!deleted) throw `${name} not deleted`;
    }
  );
}
var player_svc_default = { index, get, create, update, remove };
