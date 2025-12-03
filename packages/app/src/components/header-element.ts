import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { Observer, Auth, Events } from "@calpoly/mustang";
import reset from "../styles/reset.css.ts";

export class HeaderElement extends LitElement {
  @property()
  username?: string = "Guest User";

  _authObserver = new Observer<Auth.Model>(this, "ffl:auth");

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      const { user } = auth;

      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

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
          <a href="/app">Home</a>
          <a href="#">Players</a>
          <a href="#">Teams</a>
          <a href="#">Rankings</a>
        </nav>
        <div class="header-user">
          <span class="user-name">Hello, ${this.userid || "Footballer"}</span>
          ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}
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

  renderSignOutButton() {
    return html`
      <button
        @click=${(e: UIEvent) => {
          Events.relay(e, "auth:message", ["auth/signout"])
        }}
      >
        Sign Out
      </button>
    `;
  }

  renderSignInButton() {
    return html`
      <button
        @click=${() => {
          window.location.href = "/login.html";
        }}
      >
        Sign In
      </button>
    `;
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
        gap: var(--spacing-md);
      }

      .user-name {
        font-weight: 500;
      }

      button {
        background-color: var(--color-background-sidebar);
        color: var(--color-text-header);
        border: none;
        padding: var(--spacing-sm) var(--spacing-md);
        border-radius: 4px;
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      button:hover {
        opacity: 0.8;
      }

      .header-user a {
        background-color: var(--color-background-sidebar);
        color: var(--color-text-header);
        text-decoration: none;
        font-family: inherit;
        font-size: inherit;
        font-weight: 500;
        padding: var(--spacing-sm) var(--spacing-md);
        border: none;
        border-radius: 4px;
        transition: opacity 0.2s;
      }

      .header-user a:hover {
        opacity: 0.8;
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
