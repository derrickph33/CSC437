import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class PlayerItemElement extends LitElement {
  @property()
  href?: string;

  @property()
  name?: string;

  @property()
  team?: string;

  override render() {
    return html`
      <svg class="icon">
        <use href="/icons/football.svg#icon-player" />
      </svg>
      <a href="${this.href}">${this.name}</a>
      <span class="separator"> - </span>
      <span class="team">${this.team}</span>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: 0.5em;
        margin-bottom: 0.5em;
        font-size: 1.2rem;
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
    `
  ];
}
