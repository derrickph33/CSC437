import { LitElement, html, css } from "lit";
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

export class PlayerViewElement extends LitElement {
  @property({ attribute: "player-name" })
  playerName?: string;

  @state()
  playerData?: PlayerCardData;

  _authObserver = new Observer<Auth.Model>(this, "ffl:auth");
  _user?: Auth.User;

  get src() {
    return `/api/players/${encodeURIComponent(this.playerName || "")}`;
  }

  connectedCallback() {
    super.connectedCallback();
    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      // Fetch data after auth state is available
      if (this.playerName) this.hydrate(this.src);
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
      return html`<p>Loading player data...</p>`;
    }

    return html`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Featured Matchups</h3>
          <nav>
            <a href="#">Team Matchups</a>
            <a href="#">Position Matchups</a>
            <a href="#">Matchup Rankings</a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app">Home</a>
          </nav>
        </aside>

        <main>
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
        </main>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      padding: 1rem;
      overflow: hidden;
      height: 100%;
    }

    aside.sidebar {
      grid-column: span 2;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    aside.sidebar h3:not(:first-child) {
      margin-top: 2rem;
    }

    aside.sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    aside.sidebar nav a {
      color: var(--color-text-header);
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    main {
      grid-column: span 10;
      padding: 1.5rem;
      overflow-y: auto;
    }
  `;
}
