import { html } from 'lit-html';

export default {
  title: 'Design System/Button',
};

export const Primary = () => html`<rds-button variant="primary">Primary</rds-button>`;

export const Secondary = () => html`<rds-button variant="secondary">Secondary</rds-button>`;

export const Ghost = () => html`<rds-button variant="ghost">Ghost</rds-button>`;

export const Disabled = () => html`<rds-button variant="primary" disabled>Disabled</rds-button>`;

export const Sizes = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button size="sm">Small</rds-button>
    <rds-button size="md">Medium</rds-button>
    <rds-button size="lg">Large</rds-button>
  </div>
`;

