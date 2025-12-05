import { View, History } from "@calpoly/mustang";
import { html, css } from "lit";
import { property } from "lit/decorators.js";
import { Player } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class PlayerViewElement extends View<Model, Msg> {
  @property({ attribute: "player-name" })
  playerName?: string;

  get player(): Player | undefined {
    return this.model.player;
  }

  constructor() {
    super("ffl:model");
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (
      name === "player-name" &&
      oldValue !== newValue &&
      newValue
    ) {
      this.dispatchMessage([
        "player/request",
        { name: newValue }
      ]);
    }
  }

  handleNavigate(event: MouseEvent, href: string) {
    event.preventDefault();
    History.dispatch(this, "history/navigate", { href });
  }

  render() {
    const { player } = this;

    if (!player) {
      return html`<p>Loading player data...</p>`;
    }

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
            <a href="/app/players" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/players")}>Players</a>
            <a href="/app/rankings" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/rankings")}>Rankings</a>
          </nav>
        </aside>

        <main>
          <div class="player-actions">
            <a href="/app/player/${player.name}/edit" class="edit-button" @click=${(e: MouseEvent) => this.handleNavigate(e, `/app/player/${player.name}/edit`)}>Edit Player</a>
          </div>
          <player-card
            name=${player.name}
            image=${player.image}
            position=${player.position}
            jersey-number=${player.jerseyNumber}
            team=${player.team}
            games-played=${player.gamesPlayed}
            receptions=${player.receptions}
            receiving-yards=${player.receivingYards}
            receiving-touchdowns=${player.receivingTouchdowns}
            fantasy-points=${player.fantasyPoints}
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

    .player-actions {
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
  `;
}
