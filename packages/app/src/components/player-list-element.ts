import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer, Auth } from "@calpoly/mustang";

interface APIPlayer {
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

  _authObserver = new Observer<Auth.Model>(this, "ffl:auth");
  _user?: Auth.User;

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
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
          const apiPlayers = json as Array<APIPlayer>;
          this.players = apiPlayers.map(player => ({
            href: `/app/player/${encodeURIComponent(player.name)}`,
            name: player.name,
            team: player.team
          }));
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
