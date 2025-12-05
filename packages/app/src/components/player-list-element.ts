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

  @property({ type: Number })
  limit?: number;

  @property()
  sortBy?: 'fantasyPoints' | 'alphabetical' = 'fantasyPoints';

  get players(): PlayerListItem[] {
    let receivers = (this.model.players || []).sort((a, b) => {
      if (this.sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      } else {
        const pointsA = parseFloat(a.fantasyPoints) || 0;
        const pointsB = parseFloat(b.fantasyPoints) || 0;
        return pointsB - pointsA;
      }
    });

    if (this.limit) {
      receivers = receivers.slice(0, this.limit);
    }

    return receivers.map(player => ({
      href: `/app/player/${encodeURIComponent(player.name)}`,
      name: player.name,
      team: player.team
    }));
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
