import { html, css, LitElement } from "lit";

export class HomeViewElement extends LitElement {
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
          <h1 class="welcome-heading">Welcome to Wide Receiver University!</h1>
          <p class="welcome-subheading">Track, analyze, and compare the top Wide Receivers in Fantasy Football. Get real-time rankings, player stats, and matchup insights to dominate your league.</p>

          <img src="/images/wrs.jpg" class="hero-image">

          <h1>
            <img src="/icons/trophy.svg" class="trophy-icon" alt="trophy">
            Top Receivers
          </h1>
          <ul class="player-list">
            <player-list src="/api/players" limit="5"></player-list>
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
      grid-column: span 8;
      padding: 0 1.5rem 1.5rem 1.5rem;
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .welcome-heading {
      color: var(--color-heading);
      font-size: 2.5rem;
      margin: 0 auto 0.5rem auto;
      text-align: center;
      max-width: 800px;
      display: block;
      width: 100%;
    }

    .welcome-subheading {
      color: var(--color-text);
      font-size: 1.2rem;
      text-align: center;
      margin: 0 auto 2rem auto;
      line-height: 1.6;
      max-width: 800px;
      display: block;
    }

    .hero-image {
      width: 100%;
      max-width: 900px;
      height: auto;
      display: block;
      margin: 0 auto 1rem auto;
    }

    .trophy-icon {
      width: 40px;
      height: 40px;
      filter: brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(400%) hue-rotate(10deg);
    }

    ul.player-list {
      list-style: none;
      padding-left: 0;
    }

    @media (max-width: 1023px) {
      aside.sidebar {
        grid-column: span 2;
      }

      main {
        grid-column: span 6;
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
    }
  `;
}
