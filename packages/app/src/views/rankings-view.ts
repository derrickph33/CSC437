import { html, css } from "lit";
import { state } from "lit/decorators.js";
import { View } from "@calpoly/mustang";
import { Msg } from "../messages";
import { Model } from "../model";

type RankingCategory = "fantasyPoints" | "fantasyPointsPerGame" | "receivingYards" | "receptions" | "receivingTouchdowns";

interface RankedPlayer {
  rank: number;
  href: string;
  name: string;
  team: string;
  statValue: string;
}

export class RankingsViewElement extends View<Model, Msg> {
  @state()
  selectedCategory: RankingCategory = "fantasyPoints";

  constructor() {
    super("ffl:model");
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchMessage(["players/request", {}]);
  }

  handleCategoryChange(category: RankingCategory) {
    this.selectedCategory = category;
  }

  get categoryLabel(): string {
    const labels = {
      fantasyPoints: "Fantasy Points",
      fantasyPointsPerGame: "Fantasy Points Per Game",
      receivingYards: "Receiving Yards",
      receptions: "Receptions",
      receivingTouchdowns: "Touchdowns"
    };
    return labels[this.selectedCategory];
  }

  get categoryUnit(): string {
    const units = {
      fantasyPoints: "pts",
      fantasyPointsPerGame: "pts/game",
      receivingYards: "yds",
      receptions: "rec",
      receivingTouchdowns: "TD"
    };
    return units[this.selectedCategory];
  }

  get rankedPlayers(): RankedPlayer[] {
    const players = this.model.players || [];

    const sorted = [...players].sort((a, b) => {
      let valueA: number;
      let valueB: number;

      if (this.selectedCategory === "fantasyPointsPerGame") {
        const gamesA = parseFloat(a.gamesPlayed) || 1;
        const gamesB = parseFloat(b.gamesPlayed) || 1;
        valueA = (parseFloat(a.fantasyPoints) || 0) / gamesA;
        valueB = (parseFloat(b.fantasyPoints) || 0) / gamesB;
      } else {
        valueA = parseFloat(a[this.selectedCategory]) || 0;
        valueB = parseFloat(b[this.selectedCategory]) || 0;
      }

      return valueB - valueA;
    });

    return sorted.map((player, index) => {
      let statValue: string;

      if (this.selectedCategory === "fantasyPointsPerGame") {
        const games = parseFloat(player.gamesPlayed) || 1;
        const fpPerGame = (parseFloat(player.fantasyPoints) || 0) / games;
        statValue = fpPerGame.toFixed(2);
      } else {
        statValue = player[this.selectedCategory];
      }

      return {
        rank: index + 1,
        href: `/app/player/${encodeURIComponent(player.name)}`,
        name: player.name,
        team: player.team,
        statValue
      };
    });
  }

  render() {
    const { rankedPlayers } = this;

    return html`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Featured Matchups</h3>
          <nav>
            <a href="#">Team Matchups</a>
            <a href="#">Position Matchups</a>
            <a href="#">Matchup Rankings</a>
          </nav>

          <h3>Trending Players</h3>
          <nav>
            <a href="/app/player/CeeDee%20Lamb">CeeDee Lamb</a>
            <a href="/app/player/Puka%20Nacua">Puka Nacua</a>
            <a href="/app/player/Amon-Ra%20St.%20Brown">Amon-Ra St. Brown</a>
          </nav>
        </aside>

        <main>
          <h1>Wide Receiver Rankings</h1>
          <p class="subtitle">View Wide Receivers rankings by statistical categories!</p>

          <div class="filter-buttons">
            <button
              class="${this.selectedCategory === 'fantasyPoints' ? 'active' : ''}"
              @click=${() => this.handleCategoryChange('fantasyPoints')}
            >
              Fantasy Points
            </button>
            <button
              class="${this.selectedCategory === 'fantasyPointsPerGame' ? 'active' : ''}"
              @click=${() => this.handleCategoryChange('fantasyPointsPerGame')}
            >
              Fantasy Points Per Game
            </button>
            <button
              class="${this.selectedCategory === 'receivingYards' ? 'active' : ''}"
              @click=${() => this.handleCategoryChange('receivingYards')}
            >
              Receiving Yards
            </button>
            <button
              class="${this.selectedCategory === 'receptions' ? 'active' : ''}"
              @click=${() => this.handleCategoryChange('receptions')}
            >
              Receptions
            </button>
            <button
              class="${this.selectedCategory === 'receivingTouchdowns' ? 'active' : ''}"
              @click=${() => this.handleCategoryChange('receivingTouchdowns')}
            >
              Touchdowns
            </button>
          </div>

          <h2 class="category-heading">Rankings by ${this.categoryLabel}</h2>

          <ul class="rankings-list">
            ${rankedPlayers.map(player => html`
              <li class="ranking-item">
                <span class="rank">#${player.rank}</span>
                <svg class="icon">
                  <use href="/icons/football.svg#icon-player" />
                </svg>
                <a href="${player.href}">${player.name}</a>
                <span class="separator"> - </span>
                <span class="team">${player.team}</span>
                <span class="points">${player.statValue} ${this.categoryUnit}</span>
              </li>
            `)}
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
      grid-column: span 2;
      background-color: var(--color-background-sidebar);
      padding: 1.5rem;
      overflow-y: auto;
    }

    aside.sidebar h3 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: var(--spacing-lg, 1rem);
      font-size: 1.1rem;
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
    }

    aside.sidebar nav a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    main {
      grid-column: span 10;
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
      margin: 0 0 2rem 0;
    }

    .filter-buttons {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-buttons button {
      padding: 0.75rem 1.5rem;
      background-color: var(--color-background-sidebar);
      color: var(--color-text);
      border: 2px solid var(--color-background-sidebar);
      border-radius: 4px;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }

    .filter-buttons button:hover {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .filter-buttons button.active {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
      color: white;
    }

    .category-heading {
      color: var(--color-heading);
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 1.5rem 0;
    }

    ul.rankings-list {
      list-style: none;
      padding-left: 0;
    }

    .ranking-item {
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

    .icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: currentColor;
      flex-shrink: 0;
    }

    a {
      color: var(--color-link);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .team {
      color: var(--color-text);
    }

    .points {
      margin-left: auto;
      font-weight: 600;
      color: var(--color-accent);
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

      .ranking-item {
        font-size: 1rem;
      }

      .filter-buttons button {
        flex: 1;
        min-width: calc(50% - 0.375rem);
      }

      .category-heading {
        font-size: 1.25rem;
      }
    }
  `;
}
