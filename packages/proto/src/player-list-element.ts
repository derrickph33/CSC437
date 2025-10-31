import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

interface Player {
  href: string;
  name: string;
  team: string;
}

export class PlayerListElement extends LitElement {
  @property()
  src?: string;

  @state()
  players: Array<Player> = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: object) => {
        if (json) {
          this.players = json as Array<Player>;
        }
      })
      .catch((error) => {
        console.error("Failed to fetch player data:", error);
      });
  }

  render() {
    const { players } = this;

    function renderPlayer(player: Player) {
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
