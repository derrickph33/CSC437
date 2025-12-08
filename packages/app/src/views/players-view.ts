import { html, css, LitElement } from "lit";
import { History } from "@calpoly/mustang";

export class PlayersViewElement extends LitElement {
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
              Fantasy Matchups
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
          <div class="header-section">
            <div class="title-section">
              <h1>Wide Receivers List</h1>
              <p class="subtitle">Browse information for all of the top wide receivers!</p>
            </div>
            <a href="/app/players/add" class="add-button" @click=${(e: MouseEvent) => this.handleNavigate(e, "/app/players/add")}>
              + Add Player
            </a>
          </div>

          <div class="content-grid">
            <ul class="player-list">
              <player-list src="/api/players" sortBy="alphabetical"></player-list>
            </ul>

            <div class="image-container">
              <img src="/images/wru.png" class="wru-image" alt="Wide Receiver University">
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

    .header-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 2rem;
      gap: 2rem;
    }

    .title-section {
      flex: 1;
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
      margin: 0;
    }

    .add-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      white-space: nowrap;
    }

    .add-button:hover {
      opacity: 0.9;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    ul.player-list {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }

    .image-container {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      position: sticky;
      top: 1rem;
    }

    .wru-image {
      width: 100%;
      max-width: 350px;
      height: auto;
      border-radius: 8px;
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
        grid-template-columns: repeat(4, 1fr);
      }

      aside.sidebar {
        grid-column: span 1;
        padding: 1rem;
      }

      main {
        grid-column: span 3;
        padding: var(--spacing-lg, 1rem);
      }

      .header-section {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }

      .add-button {
        text-align: center;
      }

      .content-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .image-container {
        position: static;
        order: -1;
      }

      .wru-image {
        max-width: 100%;
      }
    }
  `;
}
