import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { History } from "@calpoly/mustang";

interface Team {
  name: string;
  image: string;
  defensiveRank: string;
  rankVsWRs: string;
}

export class TeamEditElement extends LitElement {
  @property({ attribute: "team-name" })
  teamName?: string;

  @state()
  team: Team = {
    name: "",
    image: "",
    defensiveRank: "",
    rankVsWRs: ""
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
          defensiveRank: "",
          rankVsWRs: ""
        };
      }
    } else {
      this.team = {
        name: this.teamName || "",
        image: "",
        defensiveRank: "",
        rankVsWRs: ""
      };
    }
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const updatedTeam: Team = {
      name: this.team.name,
      image: formData.get("image") as string,
      defensiveRank: formData.get("defensiveRank") as string,
      rankVsWRs: formData.get("rankVsWRs") as string
    };

    const storedTeams = localStorage.getItem("nfl-teams");
    let teams: Team[] = storedTeams ? JSON.parse(storedTeams) : [];

    const existingIndex = teams.findIndex((t: Team) => t.name === this.team.name);
    if (existingIndex >= 0) {
      teams[existingIndex] = updatedTeam;
    } else {
      teams.push(updatedTeam);
    }

    localStorage.setItem("nfl-teams", JSON.stringify(teams));

    History.dispatch(this, "history/navigate", {
      href: `/app/team/${encodeURIComponent(this.team.name)}`
    });
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
          <h1>Edit ${this.team.name}</h1>

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label for="image">Team Logo URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                .value=${this.team.image}
                placeholder="https://example.com/team-logo.png"
              />
            </div>

            <div class="form-group">
              <label for="defensiveRank">Defensive Rank:</label>
              <input
                type="text"
                id="defensiveRank"
                name="defensiveRank"
                .value=${this.team.defensiveRank}
                required
              />
            </div>

            <div class="form-group">
              <label for="rankVsWRs">Rank vs WRs:</label>
              <input
                type="text"
                id="rankVsWRs"
                name="rankVsWRs"
                .value=${this.team.rankVsWRs}
                required
              />
            </div>

            <div class="button-group">
              <button type="submit" class="submit-button">Save Changes</button>
              <a
                href="/app/team/${encodeURIComponent(this.team.name)}"
                class="cancel-button"
                @click=${(e: MouseEvent) => this.handleNavigate(e, `/app/team/${encodeURIComponent(this.team.name)}`)}>
                Cancel
              </a>
            </div>
          </form>
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

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 2rem;
      margin-top: 0;
    }

    form {
      max-width: 600px;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      color: var(--color-text);
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.75rem;
      font-size: 1rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--color-text);
      font-family: inherit;
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .submit-button {
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .submit-button:hover {
      opacity: 0.9;
    }

    .cancel-button {
      padding: 0.75rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s;
      display: inline-block;
    }

    .cancel-button:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  `;
}
