import { html, css, LitElement } from "lit";

export class HomeViewElement extends LitElement {
  render() {
    return html`
      <div class="content-wrapper">
        <aside class="sidebar">
          <h3>Featured Matchups</h3>
          <nav>
            <a href="#">Team Matchups</a>
            <a href="#">Position Matchups</a>
            <a href="#">Matchup Rankings</a>
          </nav>

          <h3>Featured Players</h3>
          <nav>
            <a href="/app/player/CeeDee%20Lamb">CeeDee Lamb</a>
            <a href="/app/player/Puka%20Nacua">Puka Nacua</a>
            <a href="/app/player/Amon-Ra%20St.%20Brown">Amon-Ra St. Brown</a>
          </nav>
        </aside>

        <main>
          <img src="/images/fantasy.png" style="width: 600px; margin-bottom: 2rem;">

          <h1>Top Players</h1>
          <ul class="player-list">
            <player-list src="/api/players"></player-list>
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
      grid-column: span 9;
      padding: var(--spacing-xl, 1.5rem);
      overflow-y: auto;
    }

    h1 {
      color: var(--color-heading);
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
    }
  `;
}
