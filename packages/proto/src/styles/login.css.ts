import { css } from "lit";

const styles = css`
  :host {
    display: block;
  }

  form {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2rem;
    background-color: var(--color-background-sidebar);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  ::slotted(label) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  ::slotted(span) {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    font-weight: 500;
  }

  ::slotted(input) {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--color-background-header);
    color: var(--color-text-header);
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
  }

  button:hover {
    opacity: 0.9;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .error:not(:empty) {
    color: #ff4444;
    background-color: #ffe0e0;
    padding: 0.75rem;
    border-radius: 4px;
    margin-top: 1rem;
  }
`;

export default { styles };
