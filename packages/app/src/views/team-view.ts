import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { History } from "@calpoly/mustang";

interface Team {
  name: string;
  image: string;
  defensiveRank: string;
  rankVsWRs: string;
}

export class TeamViewElement extends LitElement {
  @property({ attribute: "team-name" })
  teamName?: string;

  @state()
  team: Team = {
    name: "",
    image: "",
    defensiveRank: "N/A",
    rankVsWRs: "N/A"
  };

  connectedCallback() {
    super.connectedCallback();
    if (this.teamName) {
      this.loadTeam();
    }
  }

  loadTeam() {
    const storedTeams = localStorage.getItem("nfl-teams");
    if (storedTeams) {
      const teams = JSON.parse(storedTeams);
      const foundTeam = teams.find((t: Team) => t.name === this.teamName);
      if (foundTeam) {
        this.team = foundTeam;
      } else {
        this.team = {
          name: this.teamName || "",
          image: "",
          defensiveRank: "N/A",
          rankVsWRs: "N/A"
        };
      }
    } else {
      this.team = {
        name: this.teamName || "",
        image: "",
        defensiveRank: "N/A",
        rankVsWRs: "N/A"
      };
    }
  }

  handleNavigate(event: MouseEvent, href: string) {
    event.preventDefault();
    History.dispatch(this, "history/navigate", { href });
  }

  render() {
    return html`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/players")}>
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/rankings")}>
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/matchups")}>
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Matchups
            </a>
          </nav>

          <h3>Navigation</h3>
          <nav>
            <a href="/app" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app")}>Home</a>
            <a href="/app/matchups" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/matchups")}>All Teams</a>
          </nav>
        </aside>

        <main>
          <div class="team-actions">
            <a href="/app/team/${encodeURIComponent(this.team.name)}/edit" class="edit-button"
               @click=${(e: MouseEvent) => this.handleNavigate(e, `/app/team/${encodeURIComponent(this.team.name)}/edit`)}>
              Edit Team Stats
            </a>
          </div>

          <div class="team-card">
            ${this.team.image ? html`
              <img src="${this.team.image}" alt="${this.team.name}" class="team-image">
            ` : ''}
            <h1>${this.team.name}</h1>

            <div class="stats-container">
              <div class="stat-item">
                <span class="stat-label">Defensive Rank:</span>
                <span class="stat-value">${this.team.defensiveRank}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Rank vs WRs:</span>
                <span class="stat-value">${this.team.rankVsWRs}</span>
              </div>
            </div>
          </div>
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
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.3rem;
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
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-icon {
      display: inline-block;
      height: 1.2em;
      width: 1.2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    .nav-icon-img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    main {
      grid-column: span 10;
      padding: 1.5rem;
      overflow-y: auto;
    }

    .team-actions {
      margin-bottom: 1.5rem;
    }

    .edit-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
    }

    .edit-button:hover {
      opacity: 0.9;
    }

    .team-card {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 2rem;
    }

    .team-image {
      width: 200px;
      height: 200px;
      object-fit: contain;
      border-radius: 8px;
      margin-bottom: 1.5rem;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 2rem;
    }

    .stats-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .stat-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }

    .stat-label {
      color: var(--color-text);
      font-size: 1.2rem;
      font-weight: 500;
    }

    .stat-value {
      color: var(--color-accent);
      font-size: 1.5rem;
      font-weight: 700;
    }
  `;
}
