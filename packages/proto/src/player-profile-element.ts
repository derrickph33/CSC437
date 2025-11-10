import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

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

  _authObserver = new Observer<Auth.Model>(this, "ffl:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      // Fetch data after auth state is available
      if (this.src) this.hydrate(this.src);
    });
  }

  get authorization() {
    return (
      this._user?.authenticated && {
        Authorization:
          `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
      }
    );
  }

  hydrate(src: string) {
    fetch(src, { headers: this.authorization || {} })
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
