import {
  Auth,
  define,
  History,
  Store,
  Switch
} from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { HeaderElement } from "./components/header-element";
import { PlayerCardElement } from "./components/player-card";
import { PlayerItemElement } from "./components/player-item";
import { PlayerListElement } from "./components/player-list-element";
import { StatItemElement } from "./components/stat-item";
import { HomeViewElement } from "./views/home-view";
import { PlayersViewElement } from "./views/players-view";
import { RankingsViewElement } from "./views/rankings-view";
import { PlayerViewElement } from "./views/player-view";
import { PlayerEditElement } from "./views/player-edit-view";
import { PlayerAddElement } from "./views/player-add-view";

const routes = [
  {
    path: "/app/player/:name/edit",
    view: (params: Switch.Params) => html`
      <player-edit player-name=${params.name}></player-edit>
    `
  },
  {
    path: "/app/player/:name",
    view: (params: Switch.Params) => html`
      <player-view player-name=${params.name}></player-view>
    `
  },
  {
    path: "/app/players/add",
    view: () => html`
      <player-add></player-add>
    `
  },
  {
    path: "/app/players",
    view: () => html`
      <players-view></players-view>
    `
  },
  {
    path: "/app/rankings",
    view: () => html`
      <rankings-view></rankings-view>
    `
  },
  {
    path: "/app",
    view: () => html`
      <home-view></home-view>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "ffl:history", "ffl:auth");
    }
  },
  "mu-store": class AppStore extends Store.Provider<Model, Msg> {
    constructor() {
      super(update, init, "ffl:auth");
    }
  },
  "header-element": HeaderElement,
  "player-card": PlayerCardElement,
  "player-item": PlayerItemElement,
  "player-list": PlayerListElement,
  "stat-item": StatItemElement,
  "home-view": HomeViewElement,
  "players-view": PlayersViewElement,
  "rankings-view": RankingsViewElement,
  "player-view": PlayerViewElement,
  "player-edit": PlayerEditElement,
  "player-add": PlayerAddElement
});
