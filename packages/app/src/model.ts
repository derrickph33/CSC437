import { Player, Team } from "server/models";

export interface Model {
  player?: Player;
  players?: Player[];
  team?: Team;
  teams?: Team[];
}

export const init: Model = {};
