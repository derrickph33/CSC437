import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";

interface PlayerCardData {
  name: string;
  image: string;
  position: string;
  jerseyNumber: string;
  team: string;
  gamesPlayed: string;
  receptions: string;
  receivingYards: string;
  receivingTouchdowns: string;
  fantasyPoints: string;
}

export class PlayerProfileElement extends LitElement {
  @property()
  src?: string;

  @state()
  playerData?: PlayerCardData;

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: object) => {
        if (json) {
          this.playerData = json as PlayerCardData;
        }
      })
      .catch((error) => {
        console.error("Failed to fetch player data:", error);
      });
  }

  render() {
    const { playerData } = this;

    if (!playerData) {
      return html``;
    }

    return html`
      <player-card
        name=${playerData.name}
        image=${playerData.image}
        position=${playerData.position}
        jersey-number=${playerData.jerseyNumber}
        team=${playerData.team}
        games-played=${playerData.gamesPlayed}
        receptions=${playerData.receptions}
        receiving-yards=${playerData.receivingYards}
        receiving-touchdowns=${playerData.receivingTouchdowns}
        fantasy-points=${playerData.fantasyPoints}
      ></player-card>
    `;
  }
}
