import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js";

interface Team {
  name: string;
  image: string;
  defensiveRank: string;
  rankVsWRs: string;
}

export class MatchupsViewElement extends LitElement {
  @state()
  sortBy: 'defensiveRank' | 'rankVsWRs' = 'defensiveRank';

  @state()
  teams: Team[] = [];

  nflTeams = [
    "Arizona Cardinals",
    "Atlanta Falcons",
    "Baltimore Ravens",
    "Buffalo Bills",
    "Carolina Panthers",
    "Chicago Bears",
    "Cincinnati Bengals",
    "Cleveland Browns",
    "Dallas Cowboys",
    "Denver Broncos",
    "Detroit Lions",
    "Green Bay Packers",
    "Houston Texans",
    "Indianapolis Colts",
    "Jacksonville Jaguars",
    "Kansas City Chiefs",
    "Las Vegas Raiders",
    "Los Angeles Chargers",
    "Los Angeles Rams",
    "Miami Dolphins",
    "Minnesota Vikings",
    "New England Patriots",
    "New Orleans Saints",
    "New York Giants",
    "New York Jets",
    "Philadelphia Eagles",
    "Pittsburgh Steelers",
    "San Francisco 49ers",
    "Seattle Seahawks",
    "Tampa Bay Buccaneers",
    "Tennessee Titans",
    "Washington Commanders"
  ];

  connectedCallback() {
    super.connectedCallback();
    this.loadTeams();
  }

  loadTeams() {
    const storedTeams = localStorage.getItem("nfl-teams");
    const teamsData: Team[] = storedTeams ? JSON.parse(storedTeams) : [];

    this.teams = this.nflTeams.map(teamName => {
      const foundTeam = teamsData.find(t => t.name === teamName);
      return foundTeam || {
        name: teamName,
        image: "",
        defensiveRank: "N/A",
        rankVsWRs: "N/A"
      };
    });
  }

  getSortedTeams() {
    const teamsCopy = [...this.teams];

    if (this.sortBy === 'defensiveRank') {
      return teamsCopy.sort((a, b) => {
        const aRank = a.defensiveRank === 'N/A' ? 999 : parseInt(a.defensiveRank);
        const bRank = b.defensiveRank === 'N/A' ? 999 : parseInt(b.defensiveRank);
        return aRank - bRank;
      });
    } else {
      return teamsCopy.sort((a, b) => {
        const aRank = a.rankVsWRs === 'N/A' ? 999 : parseInt(a.rankVsWRs);
        const bRank = b.rankVsWRs === 'N/A' ? 999 : parseInt(b.rankVsWRs);
        return aRank - bRank;
      });
    }
  }

  handleSortChange(sortType: 'defensiveRank' | 'rankVsWRs') {
    this.sortBy = sortType;
  }

  render() {
    const sortedTeams = this.getSortedTeams();

    return html`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Fantasy Football</h3>
          <nav>
            <a href="/app/players">
              <svg class="nav-icon">
                <use href="/icons/football.svg#icon-player" />
              </svg>
              All Players
            </a>
            <a href="/app/rankings">
              <img src="/icons/rankings.svg" class="nav-icon-img" alt="rankings">
              Player Rankings
            </a>
            <a href="/app/matchups">
              <img src="/icons/matchups.svg" class="nav-icon-img" alt="matchups">
              Matchups
            </a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/Rashee%20Rice">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Rashee Rice
            </a>
            <a href="/app/player/Davante%20Adams">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              Davante Adams
            </a>
            <a href="/app/player/A.J.%20Brown">
              <img src="/icons/fire.svg" class="fire-icon" alt="trending">
              A.J. Brown
            </a>
          </nav>

          <h3>Falling Players</h3>
          <nav>
            <a href="/app/player/Justin%20Jefferson">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Justin Jefferson
            </a>
            <a href="/app/player/Emeka%20Egbuka">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Emeka Egbuka
            </a>
            <a href="/app/player/Rome%20Odunze">
              <img src="/icons/cold.svg" class="cold-icon" alt="falling">
              Rome Odunze
            </a>
          </nav>
        </aside>

        <main>
          <h1>Matchups by Teams</h1>
          <p class="subtitle">Ranking Matchups versus all 32 NFL Teams!</p>

          <div class="filter-controls">
            <button
              class="${this.sortBy === 'defensiveRank' ? 'active' : ''}"
              @click=${() => this.handleSortChange('defensiveRank')}>
              Sort by Defensive Rank
            </button>
            <button
              class="${this.sortBy === 'rankVsWRs' ? 'active' : ''}"
              @click=${() => this.handleSortChange('rankVsWRs')}>
              Sort by Rank vs WRs
            </button>
          </div>

          <ul class="teams-list">
            ${sortedTeams.map((team, index) => {
              const rank = index + 1;
              let tierClass = '';
              if (rank <= 10) {
                tierClass = 'tier-green';
              } else if (rank <= 22) {
                tierClass = 'tier-silver';
              } else {
                tierClass = 'tier-red';
              }

              return html`
                <li class="team-item ${tierClass}">
                  <span class="rank">#${rank}</span>
                  <img src="/icons/team.svg" class="team-icon" alt="team">
                  <a href="/app/team/${encodeURIComponent(team.name)}" class="team-link">
                    ${team.name}
                  </a>
                </li>
              `;
            })}
          </ul>
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
      grid-column: span 3;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem 1.5rem 1.5rem 2rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.3rem;
    }

    aside.sidebar h3:not(:first-child) {
      margin-top: var(--spacing-2xl, 2rem);
    }

    aside.sidebar nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    aside.sidebar nav a {
      color: var(--color-text-header);
      text-decoration: none;
      padding: var(--spacing-sm, 0.5rem) var(--spacing-md, 0.75rem);
      border-radius: 4px;
      transition: background-color 0.2s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .fire-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(30%) sepia(100%) saturate(5000%) hue-rotate(350deg) brightness(0.9);
    }

    .cold-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(500%) hue-rotate(180deg) brightness(1.2);
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
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    .subtitle {
      color: var(--color-text);
      font-size: 1.1rem;
      opacity: 0.8;
      margin: 0 0 1.5rem 0;
    }

    .filter-controls {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .filter-controls button {
      padding: 0.75rem 1.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      border: 2px solid transparent;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .filter-controls button:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    .filter-controls button.active {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .teams-list {
      list-style: none;
      padding-left: 0;
      color: var(--color-text);
    }

    .team-item {
      display: flex;
      align-items: center;
      gap: 0.5em;
      margin-bottom: 0.5em;
      font-size: 1.2rem;
    }

    .rank {
      font-weight: bold;
      color: var(--color-accent);
      min-width: 3em;
      text-align: right;
    }

    .team-icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      flex-shrink: 0;
    }

    .team-link {
      color: var(--color-link);
      text-decoration: none;
    }

    .team-link:hover {
      text-decoration: underline;
    }

    .tier-green .rank,
    .tier-green .team-link {
      color: #4ade80;
    }

    .tier-green .team-icon {
      filter: brightness(0) saturate(100%) invert(77%) sepia(29%) saturate(963%) hue-rotate(82deg) brightness(95%);
    }

    .tier-silver .rank,
    .tier-silver .team-link {
      color: #a8a8a8;
    }

    .tier-silver .team-icon {
      filter: brightness(0) saturate(0%) invert(70%);
    }

    .tier-red .rank,
    .tier-red .team-link {
      color: #ef4444;
    }

    .tier-red .team-icon {
      filter: brightness(0) saturate(100%) invert(39%) sepia(86%) saturate(2589%) hue-rotate(342deg) brightness(96%);
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 10;
      }
    }

    @media (max-width: 767px) {
      .content-wrapper {
        grid-template-rows: auto 1fr;
      }

      aside.sidebar {
        grid-column: span 4;
        grid-row: 1;
      }

      main {
        grid-column: span 4;
        grid-row: 2;
        padding: var(--spacing-lg, 1rem);
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .team-item {
        font-size: 1rem;
      }
    }
  `;
}
