import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class PlayerCardElement extends LitElement {
  @property()
  name?: string;

  @property()
  image?: string;

  @property()
  position?: string;

  @property({ attribute: "jersey-number" })
  jerseyNumber?: string;

  @property()
  team?: string;

  @property({ attribute: "games-played" })
  gamesPlayed?: string;

  @property()
  receptions?: string;

  @property({ attribute: "receiving-yards" })
  receivingYards?: string;

  @property({ attribute: "receiving-touchdowns" })
  receivingTouchdowns?: string;

  @property({ attribute: "fantasy-points" })
  fantasyPoints?: string;

  override render() {
    return html`
      <h1>${this.name}</h1>
      <img src="${this.image}" style="width: 300px;">

      <h2>Basic Information</h2>
      <div class="stats-grid">
        <stat-item>
          <span slot="label">Position</span>
          <span slot="value">${this.position}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Jersey Number</span>
          <span slot="value">${this.jerseyNumber}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Team</span>
          <span slot="value">${this.team}</span>
        </stat-item>
      </div>

      <h2>2025 Statistics</h2>
      <div class="stats-grid">
        <stat-item>
          <span slot="label">Games Played</span>
          <span slot="value">${this.gamesPlayed}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receptions</span>
          <span slot="value">${this.receptions}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receiving Yards</span>
          <span slot="value">${this.receivingYards}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Receiving Touchdowns</span>
          <span slot="value">${this.receivingTouchdowns}</span>
        </stat-item>
        <stat-item>
          <span slot="label">Fantasy Points</span>
          <span slot="value">${this.fantasyPoints}</span>
        </stat-item>
      </div>

      <p><a href="index.html">← Back to Home</a></p>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
      }

      h1 {
        font-size: var(--font-size-xxxl);
        font-weight: var(--font-weight-bold);
        color: var(--color-heading);
        margin-bottom: var(--spacing-2xl);
      }

      img {
        margin-bottom: var(--spacing-2xl);
        border-radius: var(--border-radius);
      }

      h2 {
        font-size: var(--font-size-xxl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-heading);
        margin-top: var(--spacing-2xl);
        margin-bottom: var(--spacing-xl);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-xl);
        margin-bottom: var(--spacing-2xl);
      }

      p {
        margin-top: var(--spacing-2xl);
      }

      a {
        color: var(--color-link);
        text-decoration: none;
        font-weight: var(--font-weight-semibold);
      }

      a:hover {
        text-decoration: underline;
      }
    `
  ];
}
