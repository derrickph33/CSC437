import { Player } from "server/models";

export type Msg =
  | ["player/request", { name: string }]
  | ["player/save", { name: string; player: Player }]
  | ["players/request", {}]
  | Cmd;

type Cmd =
  | ["player/load", { name: string; player: Player }]
  | ["players/load", { players: Player[] }];
