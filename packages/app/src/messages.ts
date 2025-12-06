import { Player, Team } from "server/models";

export type Msg =
  | ["player/request", { name: string }]
  | [
      "player/save",
      { name: string; player: Player },
      {
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | [
      "player/create",
      { player: Player },
      {
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | [
      "player/delete",
      { name: string },
      {
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | ["players/request", {}]
  | ["team/request", { name: string }]
  | [
      "team/save",
      { name: string; team: Team },
      {
        onSuccess?: () => void;
        onFailure?: (err: Error) => void;
      }
    ]
  | ["teams/request", {}]
  | Cmd;

type Cmd =
  | ["player/load", { name: string; player: Player }]
  | ["players/load", { players: Player[] }]
  | ["team/load", { name: string; team: Team }]
  | ["teams/load", { teams: Team[] }];
