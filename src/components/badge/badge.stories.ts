import { html } from 'lit-html';

export default {
  title: 'Design System/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'A design-system badge for `rangoli-ui`. Supports text, icons, and multiple variants with interactive controls.',
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

export const Playground = (args: {
  variant: string;
  size: string;
  label: string;
  iconName: string;
  iconPlacement: string;
}) => html`
  <rdc-badge
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
    icon-name=${args.iconName}
    icon-placement=${args.iconPlacement}
  ></rdc-badge>
`;

Playground.args = {
  variant: 'primary',
  size: 'md',
  label: 'Badge',
  iconName: 'star-fill',
  iconPlacement: 'before',
};

const Template = (args: {
  variant: string;
  size: string;
  label: string;
  iconName?: string;
  iconPlacement?: string;
}) => html`
  <rdc-badge
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
    icon-name=${args.iconName || ''}
    icon-placement=${args.iconPlacement || 'before'}
  ></rdc-badge>
`;

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

export const WithIconBefore = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge variant="primary" label="New" icon-name="star-fill" icon-placement="before"></rdc-badge>
    <rdc-badge variant="success" label="Verified" icon-name="check-circle-fill" icon-placement="before"></rdc-badge>
    <rdc-badge variant="danger" label="Alert" icon-name="exclamation-circle-fill" icon-placement="before"></rdc-badge>
  </div>
`;

export const WithIconAfter = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge variant="primary" label="View" icon-name="arrow-right" icon-placement="after"></rdc-badge>
    <rdc-badge variant="success" label="Approved" icon-name="check" icon-placement="after"></rdc-badge>
    <rdc-badge variant="warning" label="Pending" icon-name="clock" icon-placement="after"></rdc-badge>
  </div>
`;

export const SizesWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge size="sm" label="Small" icon-name="star-fill" icon-placement="before"></rdc-badge>
    <rdc-badge size="md" label="Medium" icon-name="star-fill" icon-placement="before"></rdc-badge>
    <rdc-badge size="lg" label="Large" icon-name="star-fill" icon-placement="before"></rdc-badge>
  </div>
`;

export const VariantsWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-badge variant="primary" label="Primary" icon-name="star-fill"></rdc-badge>
    <rdc-badge variant="secondary" label="Secondary" icon-name="check-circle-fill"></rdc-badge>
    <rdc-badge variant="ghost" label="Ghost" icon-name="bell"></rdc-badge>
    <rdc-badge variant="danger" label="Danger" icon-name="x-circle-fill"></rdc-badge>
    <rdc-badge variant="warning" label="Warning" icon-name="exclamation-triangle-fill"></rdc-badge>
    <rdc-badge variant="success" label="Success" icon-name="check2-circle"></rdc-badge>
    <rdc-badge variant="info" label="Info" icon-name="info-circle-fill"></rdc-badge>
  </div>
`;
