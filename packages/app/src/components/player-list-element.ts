import { View } from "@calpoly/mustang";
import { html } from "lit";
import { property } from "lit/decorators.js";
import { Msg } from "../messages";
import { Model } from "../model";

interface PlayerListItem {
  href: string;
  name: string;
  team: string;
}

export class PlayerListElement extends View<Model, Msg> {
  @property()
  src?: string;

  get players(): PlayerListItem[] {
    const playerList = (this.model.players || []).map(player => ({
      href: `/app/player/${encodeURIComponent(player.name)}`,
      name: player.name,
      team: player.team
    }));

    return playerList.sort((a, b) => {
      const firstNameA = a.name.split(' ')[0].toLowerCase();
      const firstNameB = b.name.split(' ')[0].toLowerCase();
      return firstNameA.localeCompare(firstNameB);
    });
  }

  constructor() {
    super("ffl:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["players/request", {}]);
  }

  render() {
    const { players } = this;

    function renderPlayer(player: PlayerListItem) {
      return html`
        <player-item
          href=${player.href}
          name=${player.name}
          team=${player.team}
        ></player-item>
      `;
    }

    return html`
      ${players.map(renderPlayer)}
    `;
  }
}
