import { html } from 'lit-html';

export default {
  title: 'Design System/Button',
  parameters: {
    docs: {
      description: {
        component:
          'A design-system button for `rangoli-ui`. Use the controls below to interactively preview variants, sizes, and disabled state.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger', 'warning', 'success', 'info'],
      description: 'Visual style of the button.',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size.',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button.',
      table: { category: 'Behavior' },
    },
    buttonType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Native `<button type="...">` behavior.',
      table: { category: 'Behavior' },
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
  disabled: boolean;
  buttonType: string;
  label: string;
}) => html`
  <rds-button
    variant=${args.variant}
    size=${args.size}
    button-type=${args.buttonType}
    ?disabled=${args.disabled}
    label=${args.label}
  ></rds-button>
`;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Ghost',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Warning',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Success',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Info',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  size: 'md',
  disabled: true,
  buttonType: 'button',
  label: 'Disabled',
};

export const Sizes = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button size="sm" label="Small"></rds-button>
    <rds-button size="md" label="Medium"></rds-button>
    <rds-button size="lg" label="Large"></rds-button>
  </div>
`;

