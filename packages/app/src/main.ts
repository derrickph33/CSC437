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
import { PlayerViewElement } from "./views/player-view";

const routes = [
  {
    path: "/app/player/:name",
    view: (params: Switch.Params) => html`
      <player-view player-name=${params.name}></player-view>
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
  "player-view": PlayerViewElement
});
