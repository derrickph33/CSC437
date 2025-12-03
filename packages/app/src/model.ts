import { Player } from "server/models";

export interface Model {
  player?: Player;
  players?: Player[];
}

export const init: Model = {};
