import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Model } from "./model";
import { Msg } from "./messages";
import { Player } from "server/models";

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
