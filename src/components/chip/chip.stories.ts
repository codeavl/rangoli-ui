import { html } from 'lit-html';

export default {
  title: 'Design System/Chip',
  parameters: {
    docs: {
      description: {
        component:
          'A design-system chip for `rangoli-ui`. Supports small tags with optional close buttons, multiple variants, and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger', 'warning', 'success', 'info'],
      description: 'Visual style of the chip.',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Chip size.',
      table: { category: 'Appearance' },
    },
    label: {
      control: { type: 'text' },
      description: 'Fallback text when no slot content is provided.',
      table: { category: 'Content' },
    },
    deletable: {
      control: { type: 'boolean' },
      description: 'Show close/delete button.',
      table: { category: 'Behavior' },
    },
    closeIconName: {
      control: { type: 'text' },
      description: 'Bootstrap icon name for the close button.',
      table: { category: 'Icon' },
    },
    closeAriaLabel: {
      control: { type: 'text' },
      description: 'ARIA label for the close button.',
      table: { category: 'Accessibility' },
    },
  },
};

const Template = (args: {
  variant: string;
  size: string;
  label: string;
  deletable: boolean;
  closeIconName: string;
  closeAriaLabel: string;
}) => html`
  <rdc-chip
    variant=${args.variant}
    size=${args.size}
    label=${args.label}
    ?deletable=${args.deletable}
    close-icon-name=${args.closeIconName}
    close-aria-label=${args.closeAriaLabel}
  ></rdc-chip>
`;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  label: 'Chip',
  deletable: true,
  closeIconName: 'x-circle',
  closeAriaLabel: 'Remove chip',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  label: 'Primary',
  deletable: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  label: 'Secondary',
  deletable: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  label: 'Ghost',
  deletable: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  label: 'Danger',
  deletable: false,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'md',
  label: 'Warning',
  deletable: false,
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'md',
  label: 'Success',
  deletable: false,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  size: 'md',
  label: 'Info',
  deletable: false,
};

export const Sizes = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip size="sm" label="Small"></rdc-chip>
    <rdc-chip size="md" label="Medium"></rdc-chip>
    <rdc-chip size="lg" label="Large"></rdc-chip>
  </div>
`;

export const AllVariants = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip variant="primary" label="Primary"></rdc-chip>
    <rdc-chip variant="secondary" label="Secondary"></rdc-chip>
    <rdc-chip variant="ghost" label="Ghost"></rdc-chip>
    <rdc-chip variant="danger" label="Danger"></rdc-chip>
    <rdc-chip variant="warning" label="Warning"></rdc-chip>
    <rdc-chip variant="success" label="Success"></rdc-chip>
    <rdc-chip variant="info" label="Info"></rdc-chip>
  </div>
`;

export const Deletable = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip variant="primary" label="React" deletable></rdc-chip>
    <rdc-chip variant="secondary" label="Vue" deletable></rdc-chip>
    <rdc-chip variant="success" label="Angular" deletable></rdc-chip>
    <rdc-chip variant="danger" label="Svelte" deletable></rdc-chip>
  </div>
`;

export const DeletableBySize = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip size="sm" label="Small" deletable></rdc-chip>
    <rdc-chip size="md" label="Medium" deletable></rdc-chip>
    <rdc-chip size="lg" label="Large" deletable></rdc-chip>
  </div>
`;

export const Tags = () => html`
  <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
    <rdc-chip variant="primary" size="md" label="React" deletable></rdc-chip>
    <rdc-chip variant="secondary" size="md" label="TypeScript" deletable></rdc-chip>
    <rdc-chip variant="info" size="md" label="Stencil" deletable></rdc-chip>
    <rdc-chip variant="success" size="md" label="Web Components" deletable></rdc-chip>
    <rdc-chip variant="warning" size="md" label="Design System" deletable></rdc-chip>
  </div>
`;

export const VariantsWithDelete = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip variant="primary" label="Primary" deletable></rdc-chip>
    <rdc-chip variant="secondary" label="Secondary" deletable></rdc-chip>
    <rdc-chip variant="ghost" label="Ghost" deletable></rdc-chip>
    <rdc-chip variant="danger" label="Danger" deletable></rdc-chip>
    <rdc-chip variant="warning" label="Warning" deletable></rdc-chip>
    <rdc-chip variant="success" label="Success" deletable></rdc-chip>
    <rdc-chip variant="info" label="Info" deletable></rdc-chip>
  </div>
`;

export const CustomCloseIcon = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
    <rdc-chip variant="primary" label="Close X-Circle" deletable close-icon-name="x-circle"></rdc-chip>
    <rdc-chip variant="secondary" label="Close X" deletable close-icon-name="x"></rdc-chip>
    <rdc-chip variant="success" label="Close Check" deletable close-icon-name="check-circle"></rdc-chip>
    <rdc-chip variant="danger" label="Close Trash" deletable close-icon-name="trash"></rdc-chip>
    <rdc-chip variant="info" label="Close Square" deletable close-icon-name="x-square"></rdc-chip>
  </div>
`;
