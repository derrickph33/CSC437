import { html, css, LitElement } from "lit";

export class FooterElement extends LitElement {
  render() {
    return html`
      <footer>
        <div class="footer-content">
          <p>&copy; 2025 Wide Receiver University. All rights reserved.</p>
          <p class="footer-update">*Statistics and Rankings last updated Week 13 2025 NFL Season*</p>
        </div>
      </footer>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    footer {
      background-color: var(--color-background-header);
      color: var(--color-text-header);
      padding: 1.5rem 2rem;
    }

    .footer-content {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .footer-update {
      font-style: italic;
      opacity: 0.8;
    }

    @media (max-width: 767px) {
      .footer-content {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
    }
  `;
}
