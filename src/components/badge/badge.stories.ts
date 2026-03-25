import { html } from 'lit-html';

export default {
  title: 'Design System/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'A design-system badge for `rangoli-ui`. Use the controls below to interactively preview variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger', 'warning', 'success', 'info'],
      description: 'Visual style of the badge.',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size.',
      table: { category: 'Appearance' },
    },
    label: {
      control: { type: 'text' },
      description: 'Fallback text when no slot content is provided.',
      table: { category: 'Content' },
    },
  },
};

const Template = (args: {
  variant: string;
  size: string;
  label: string;
}) => html`
  <rdc-badge
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
  ></rdc-badge>
`;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  label: 'Badge',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  label: 'Ghost',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  label: 'Danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'md',
  label: 'Warning',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'md',
  label: 'Success',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'md',
  label: 'Info',
};

export const Sizes = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge size="sm" label="Small"></rdc-badge>
    <rdc-badge size="md" label="Medium"></rdc-badge>
    <rdc-badge size="lg" label="Large"></rdc-badge>
  </div>
`;

export const AllVariants = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge variant="primary" label="Primary"></rdc-badge>
    <rdc-badge variant="secondary" label="Secondary"></rdc-badge>
    <rdc-badge variant="ghost" label="Ghost"></rdc-badge>
    <rdc-badge variant="danger" label="Danger"></rdc-badge>
    <rdc-badge variant="warning" label="Warning"></rdc-badge>
    <rdc-badge variant="success" label="Success"></rdc-badge>
    <rdc-badge variant="info" label="Info"></rdc-badge>
  </div>
`;
