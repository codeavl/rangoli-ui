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
    iconName: {
      control: { type: 'text' },
      description: 'Bootstrap icon name to display.',
      table: { category: 'Icon' },
    },
    iconPlacement: {
      control: { type: 'select' },
      options: ['before', 'after'],
      description: 'Icon placement position.',
      table: { category: 'Icon' },
    },
  },
};

const Template = (args: {
  variant: string;
  size: string;
  disabled: boolean;
  buttonType: string;
  label: string;
  iconName?: string;
  iconPlacement?: string;
}) => html`
  <rds-button
    variant=${args.variant}
    size=${args.size}
    button-type=${args.buttonType}
    ?disabled=${args.disabled}
    label=${args.label}
    icon-name=${args.iconName || ''}
    icon-placement=${args.iconPlacement || 'before'}
  ></rds-button>
`;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  buttonType: 'button',
  label: 'Button',
  iconName: 'star-fill',
  iconPlacement: 'before',
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

export const WithIconBefore = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button variant="primary" label="Download" icon-name="download" icon-placement="before"></rds-button>
    <rds-button variant="success" label="Save" icon-name="check-circle-fill" icon-placement="before"></rds-button>
    <rds-button variant="danger" label="Delete" icon-name="trash" icon-placement="before"></rds-button>
    <rds-button variant="info" label="Settings" icon-name="gear-fill" icon-placement="before"></rds-button>
  </div>
`;

export const WithIconAfter = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button variant="primary" label="Next" icon-name="arrow-right" icon-placement="after"></rds-button>
    <rds-button variant="secondary" label="More" icon-name="chevron-down" icon-placement="after"></rds-button>
    <rds-button variant="ghost" label="Search" icon-name="search" icon-placement="after"></rds-button>
    <rds-button variant="info" label="Help" icon-name="question-circle" icon-placement="after"></rds-button>
  </div>
`;

export const SizesWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button size="sm" label="Small" icon-name="star-fill" icon-placement="before"></rds-button>
    <rds-button size="md" label="Medium" icon-name="star-fill" icon-placement="before"></rds-button>
    <rds-button size="lg" label="Large" icon-name="star-fill" icon-placement="before"></rds-button>
  </div>
`;

export const VariantsWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button variant="primary" label="Primary" icon-name="star-fill" icon-placement="before"></rds-button>
    <rds-button variant="secondary" label="Secondary" icon-name="heart" icon-placement="before"></rds-button>
    <rds-button variant="ghost" label="Ghost" icon-name="bell" icon-placement="before"></rds-button>
    <rds-button variant="danger" label="Danger" icon-name="exclamation-triangle-fill" icon-placement="before"></rds-button>
    <rds-button variant="warning" label="Warning" icon-name="exclamation-circle" icon-placement="before"></rds-button>
    <rds-button variant="success" label="Success" icon-name="check2-circle" icon-placement="before"></rds-button>
    <rds-button variant="info" label="Info" icon-name="info-circle-fill" icon-placement="before"></rds-button>
  </div>
`;

export const IconOnly = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-button variant="primary" icon-name="star-fill"></rds-button>
    <rds-button variant="success" icon-name="check-circle-fill"></rds-button>
    <rds-button variant="danger" icon-name="trash"></rds-button>
    <rds-button variant="warning" icon-name="exclamation-circle"></rds-button>
    <rds-button variant="info" icon-name="gear-fill"></rds-button>
  </div>
`;

