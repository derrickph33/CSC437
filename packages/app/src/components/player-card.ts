import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "../styles/reset.css.ts";

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

  get imageSrc() {
    // If it's a full URL (starts with http:// or https://), use it as-is
    if (this.image?.startsWith('http://') || this.image?.startsWith('https://')) {
      return this.image;
    }
    // Otherwise, treat it as a local path and add / prefix if needed
    return this.image?.startsWith('/') ? this.image : `/${this.image}`;
  }

  override render() {
    return html`
      <h1>${this.name}</h1>
      <img src="${this.imageSrc}" style="width: 300px;">

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

      <p><a href="/app">← Back to Home</a></p>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: block;
      }

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-heading);
        margin-bottom: 2rem;
      }

      img {
        margin-bottom: 2rem;
        border-radius: 8px;
      }

      h2 {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--color-heading);
        margin-top: 2rem;
        margin-bottom: 1.5rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      p {
        margin-top: 2rem;
      }

      a {
        color: var(--color-link);
        text-decoration: none;
        font-weight: 600;
      }

      a:hover {
        text-decoration: underline;
      }
    `
  ];
}
