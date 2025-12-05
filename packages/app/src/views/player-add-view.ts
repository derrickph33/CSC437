import { define, Form, History, View } from "@calpoly/mustang";
import { css, html } from "lit";
import { Player } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class PlayerAddElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element
  });

  constructor() {
    super("ffl:model");
  }

  handleNavigate(event: MouseEvent, href: string) {
    event.preventDefault();
    History.dispatch(this, "history/navigate", { href });
  }

  render() {
    return html`
      <main class="page">
        <section class="add-section">
          <h2>Add New Wide Receiver</h2>
          <mu-form @mu-form:submit=${this.handleSubmit}>
            <label>
              <span>Name</span>
              <input name="name" required />
            </label>
            <label>
              <span>Image URL (PNG or JPG)</span>
              <input name="image" />
            </label>
            <label>
              <span>Position</span>
              <input name="position" value="Wide Receiver" />
            </label>
            <label>
              <span>Jersey Number</span>
              <input name="jerseyNumber" />
            </label>
            <label>
              <span>Team</span>
              <input name="team" />
            </label>
            <label>
              <span>Games Played</span>
              <input name="gamesPlayed" />
            </label>
            <label>
              <span>Receptions</span>
              <input name="receptions" />
            </label>
            <label>
              <span>Receiving Yards</span>
              <input name="receivingYards" />
            </label>
            <label>
              <span>Receiving Touchdowns</span>
              <input name="receivingTouchdowns" />
            </label>
            <label>
              <span>Fantasy Points</span>
              <input name="fantasyPoints" />
            </label>
            <div class="form-actions">
              <a href="/app/players" class="action-button back-button" @click=${(e: MouseEvent) => this.handleNavigate(e, `/app/players`)}>Cancel</a>
            </div>
          </mu-form>
        </section>
      </main>
    `;
  }

  handleSubmit(event: Form.SubmitEvent<Player>) {
    this.dispatchMessage([
      "player/create",
      {
        player: event.detail
      },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/app/players`
          }),
        onFailure: (error: Error) =>
          console.log("ERROR:", error)
      }
    ]);
  }

  static styles = css`
    :host {
      display: block;
      grid-area: content;
      height: 100%;
    }

    main {
      padding: 2rem;
      overflow-y: auto;
    }

    .add-section {
      max-width: 600px;
      margin: 0 auto;
      background-color: var(--color-background-sidebar);
      padding: 2rem;
      border-radius: 8px;
    }

    h2 {
      color: var(--color-text-header);
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    mu-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    label span {
      color: var(--color-text-header);
      font-weight: 500;
    }

    input {
      padding: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--color-text-header);
      font-size: 1rem;
    }

    input:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .action-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      border: none;
      font-size: 1rem;
    }

    .action-button:hover {
      opacity: 0.9;
    }

    .back-button {
      background-color: #6c757d;
    }

    /* Style the submit button provided by mu-form */
    mu-form::part(submit) {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: var(--color-accent);
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: opacity 0.2s;
      cursor: pointer;
      border: none;
      font-size: 1rem;
    }

    mu-form::part(submit):hover {
      opacity: 0.9;
    }
  `;
}
