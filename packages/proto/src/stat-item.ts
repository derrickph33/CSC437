import { html, css, LitElement } from "lit";
import reset from "./styles/reset.css.ts";

export class StatItemElement extends LitElement {
  override render() {
    return html`
      <span class="stat-label"><slot name="label"></slot></span>
      <span class="stat-value"><slot name="value"></slot></span>
    `;
  }

  static styles = [
    reset.styles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .stat-label {
        font-weight: 600;
        color: var(--color-text);
        font-size: 0.9rem;
      }

      .stat-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-heading);
      }
    `
  ];
}
