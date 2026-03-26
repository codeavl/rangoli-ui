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
  <rds-badge
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
    icon-name=${args.iconName}
    icon-placement=${args.iconPlacement}
  ></rds-badge>
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
  <rds-badge
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
    icon-name=${args.iconName || ''}
    icon-placement=${args.iconPlacement || 'before'}
  ></rds-badge>
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
    <rds-badge size="sm" label="Small"></rds-badge>
    <rds-badge size="md" label="Medium"></rds-badge>
    <rds-badge size="lg" label="Large"></rds-badge>
  </div>
`;

export const AllVariants = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-badge variant="primary" label="Primary"></rds-badge>
    <rds-badge variant="secondary" label="Secondary"></rds-badge>
    <rds-badge variant="ghost" label="Ghost"></rds-badge>
    <rds-badge variant="danger" label="Danger"></rds-badge>
    <rds-badge variant="warning" label="Warning"></rds-badge>
    <rds-badge variant="success" label="Success"></rds-badge>
    <rds-badge variant="info" label="Info"></rds-badge>
  </div>
`;

export const WithIconBefore = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-badge variant="primary" label="New" icon-name="star-fill" icon-placement="before"></rds-badge>
    <rds-badge variant="success" label="Verified" icon-name="check-circle-fill" icon-placement="before"></rds-badge>
    <rds-badge variant="danger" label="Alert" icon-name="exclamation-circle-fill" icon-placement="before"></rds-badge>
  </div>
`;

export const WithIconAfter = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-badge variant="primary" label="View" icon-name="arrow-right" icon-placement="after"></rds-badge>
    <rds-badge variant="success" label="Approved" icon-name="check" icon-placement="after"></rds-badge>
    <rds-badge variant="warning" label="Pending" icon-name="clock" icon-placement="after"></rds-badge>
  </div>
`;

export const SizesWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-badge size="sm" label="Small" icon-name="star-fill" icon-placement="before"></rds-badge>
    <rds-badge size="md" label="Medium" icon-name="star-fill" icon-placement="before"></rds-badge>
    <rds-badge size="lg" label="Large" icon-name="star-fill" icon-placement="before"></rds-badge>
  </div>
`;

export const VariantsWithIcons = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rds-badge variant="primary" label="Primary" icon-name="star-fill"></rds-badge>
    <rds-badge variant="secondary" label="Secondary" icon-name="check-circle-fill"></rds-badge>
    <rds-badge variant="ghost" label="Ghost" icon-name="bell"></rds-badge>
    <rds-badge variant="danger" label="Danger" icon-name="x-circle-fill"></rds-badge>
    <rds-badge variant="warning" label="Warning" icon-name="exclamation-triangle-fill"></rds-badge>
    <rds-badge variant="success" label="Success" icon-name="check2-circle"></rds-badge>
    <rds-badge variant="info" label="Info" icon-name="info-circle-fill"></rds-badge>
  </div>
`;
