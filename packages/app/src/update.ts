import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Model } from "./model";
import { Msg } from "./messages";
import { Player, Team } from "server/models";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
  const [type, payload, callbacks] = message;
  switch (type) {
    case "player/request": {
      const { name } = payload;
      if (model.player?.name === name) break;
      return [
        { ...model, player: { name } as Player },
        requestPlayer(payload, user)
          .then((player) => ["player/load", { name, player }])
      ];
    }
    case "player/load": {
      const { player } = payload;
      return { ...model, player };
    }
    case "player/save": {
      const { name } = payload;
      return [
        { ...model, players: undefined },
        savePlayer(payload, user, callbacks || {})
          .then((player) => ["player/load", { name, player }])
      ];
    }
    case "player/create": {
      return [
        { ...model, players: undefined },
        createPlayer(payload, user, callbacks || {})
          .then((player) => ["player/load", { name: player.name, player }])
      ];

    }
    case "player/delete": {
      const { name } = payload;
      return [
        { ...model, players: undefined, player: undefined },
        deletePlayer(payload, user, callbacks || {})
      ];
    }
    case "players/request": {
      if (model.players) break;
      return [
        model,
        requestPlayers(user)
          .then((players) => ["players/load", { players }])
      ];
    }
    case "players/load": {
      const { players } = payload;
      return { ...model, players };
    }
    case "team/request": {
      const { name } = payload;
      if (model.team?.name === name) break;
      return [
        { ...model, team: { name } as Team },
        requestTeam(payload, user)
          .then((team) => ["team/load", { name, team }])
      ];
    }
    case "team/load": {
      const { team } = payload;
      return { ...model, team };
    }
    case "team/save": {
      const { name } = payload;
      return [
        { ...model, teams: undefined },
        saveTeam(payload, user, callbacks || {})
          .then((team) => ["team/load", { name, team }])
      ];
    }
    case "teams/request": {
      if (model.teams) break;
      return [
        model,
        requestTeams(user)
          .then((teams) => ["teams/load", { teams }])
      ];
    }
    case "teams/load": {
      const { teams } = payload;
      return { ...model, teams };
    }
    default: {
      const unhandled: never = type;
      throw new Error(`Unhandled message type "${unhandled}"`);
    }
  }
  return model;
}

function requestPlayer(
  payload: { name: string },
  user: Auth.User
): Promise<Player> {
  return fetch(`/api/players/${payload.name}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw `Failed to fetch player: ${response.status}`;
    })
    .then((json: unknown) => {
      if (json) return json as Player;
      throw "No JSON in response from server";
    });
}

function savePlayer(
  payload: { name: string; player: Player },
  user: Auth.User,
  callbacks: {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
  }
): Promise<Player> {
  return fetch(`/api/players/${payload.name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(payload.player)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(
        `Failed to save player for ${payload.name}`
      );
    })
    .then((json: unknown) => {
      if (json) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return json as Player;
      }
      throw new Error(
        `No JSON in API response`
      );
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}

function createPlayer(
  payload: { player: Player },
  user: Auth.User,
  callbacks: {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
  }
): Promise<Player> {
  return fetch("/api/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(payload.player)
  })
    .then((response: Response) => {
      if (response.status === 201) return response.json();
      throw new Error(
        `Failed to create player`
      );
    })
    .then((json: unknown) => {
      if (json) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return json as Player;
      }
      throw new Error(
        `No JSON in API response`
      );
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}

function deletePlayer(
  payload: { name: string },
  user: Auth.User,
  callbacks: {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
  }
): Promise<void> {
  return fetch(`/api/players/${payload.name}`, {
    method: "DELETE",
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 204) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return;
      }
      throw new Error(
        `Failed to delete player ${payload.name}`
      );
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}

function requestPlayers(user: Auth.User): Promise<Player[]> {
  return fetch("/api/players", {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw `Failed to fetch players: ${response.status}`;
    })
    .then((json: unknown) => {
      if (json) return json as Player[];
      throw "No JSON in response from server";
    });
}

function requestTeam(
  payload: { name: string },
  user: Auth.User
): Promise<Team> {
  return fetch(`/api/teams/${payload.name}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw `Failed to fetch team: ${response.status}`;
    })
    .then((json: unknown) => {
      if (json) return json as Team;
      throw "No JSON in response from server";
    });
}

function saveTeam(
  payload: { name: string; team: Team },
  user: Auth.User,
  callbacks: {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
  }
): Promise<Team> {
  return fetch(`/api/teams/${payload.name}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(payload.team)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(
        `Failed to save team for ${payload.name}`
      );
    })
    .then((json: unknown) => {
      if (json) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return json as Team;
      }
      throw new Error(
        `No JSON in API response`
      );
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}

function requestTeams(user: Auth.User): Promise<Team[]> {
  return fetch("/api/teams", {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw `Failed to fetch teams: ${response.status}`;
    })
    .then((json: unknown) => {
      if (json) return json as Team[];
      throw "No JSON in response from server";
    });
}
