import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class HeaderElement extends LitElement {
  @property()
  username?: string = "Guest User";

  override render() {
    return html`
      <header>
        <div class="header-logo">
          <svg class="icon">
            <use href="/icons/football.svg#icon-football" />
          </svg>
          <span class="app-name">Fantasy Football Land</span>
        </div>
        <nav class="header-nav">
          <a href="index.html">Home</a>
          <a href="temp.html">Players</a>
          <a href="temp.html">Teams</a>
          <a href="temp.html">Rankings</a>
        </nav>
        <div class="header-user">
          <span class="user-name">${this.username}</span>
        </div>
        <label id="light-mode-toggle">
          <input type="checkbox" autocomplete="off" @change="${this._handleLightModeToggle}" />
          Light mode
        </label>
      </header>
    `;
  }

  private _handleLightModeToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    const customEvent = new CustomEvent('lightmode:toggle', {
      bubbles: true,
      composed: true,
      detail: { checked: input.checked }
    });
    this.dispatchEvent(customEvent);
  }

  static styles = [
    reset.styles,
    css`
      :host {
        grid-area: header;
      }

      header {
        background-color: var(--color-background-header);
        color: var(--color-text-header);
        padding: var(--spacing-2xl) var(--spacing-2xl);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spacing-2xl);
      }

      .header-logo {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-weight: bold;
        font-size: 1.25rem;
      }

      .header-nav {
        display: flex;
        gap: var(--spacing-xl);
        flex: 1;
        justify-content: center;
      }

      .header-nav a {
        color: var(--color-text-header);
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      .header-nav a:hover {
        opacity: 0.7;
      }

      .header-user {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
      }

      .user-name {
        font-weight: 500;
      }

      .icon {
        display: inline-block;
        height: 2em;
        width: 2em;
        vertical-align: top;
        fill: currentColor;
      }

      label {
        cursor: pointer;
      }
    `
  ];
}
