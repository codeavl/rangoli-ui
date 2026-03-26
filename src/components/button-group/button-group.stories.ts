import { html } from 'lit-html';

export default {
  title: 'Design System/Button Group',
  parameters: {
    docs: {
      description: {
        component:
          'A button group component for `rangoli-ui`. Groups multiple buttons together with consistent styling and layout options.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the button group.',
      table: { category: 'Appearance' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of buttons in the group.',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the entire button group.',
      table: { category: 'Behavior' },
    },
    label: {
      control: { type: 'text' },
      description: 'Accessible label for the button group.',
      table: { category: 'Accessibility' },
    },
  },
};

const HorizontalTemplate = (args: {
  orientation: string;
  size: string;
  disabled: boolean;
  label?: string;
}) => html`
  <rds-button-group
    orientation=${args.orientation}
    size=${args.size}
    ?disabled=${args.disabled}
    label=${args.label || 'Button group'}
  >
    <rds-button label="Left" size=${args.size}></rds-button>
    <rds-button label="Center" size=${args.size}></rds-button>
    <rds-button label="Right" size=${args.size}></rds-button>
  </rds-button-group>
`;

const VerticalTemplate = (args: {
  orientation: string;
  size: string;
  disabled: boolean;
  label?: string;
}) => html`
  <rds-button-group
    orientation=${args.orientation}
    size=${args.size}
    ?disabled=${args.disabled}
    label=${args.label || 'Button group'}
  >
    <rds-button label="Top" size=${args.size}></rds-button>
    <rds-button label="Middle" size=${args.size}></rds-button>
    <rds-button label="Bottom" size=${args.size}></rds-button>
  </rds-button-group>
`;

export const Playground = HorizontalTemplate.bind({});
Playground.args = {
  orientation: 'horizontal',
  size: 'md',
  disabled: false,
  label: 'Button Group',
};

export const Horizontal = HorizontalTemplate.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  size: 'md',
  disabled: false,
  label: 'Horizontal Group',
};

export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  orientation: 'vertical',
  size: 'md',
  disabled: false,
  label: 'Vertical Group',
};

export const SmallButtons = HorizontalTemplate.bind({});
SmallButtons.args = {
  orientation: 'horizontal',
  size: 'sm',
  disabled: false,
  label: 'Small Buttons',
};

export const LargeButtons = HorizontalTemplate.bind({});
LargeButtons.args = {
  orientation: 'horizontal',
  size: 'lg',
  disabled: false,
  label: 'Large Buttons',
};

export const DisabledGroup = HorizontalTemplate.bind({});
DisabledGroup.args = {
  orientation: 'horizontal',
  size: 'md',
  disabled: true,
  label: 'Disabled Button Group',
};

export const VariantsHorizontal = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <h3>Primary Buttons</h3>
      <rds-button-group orientation="horizontal" label="Primary buttons">
        <rds-button variant="primary" label="Button 1"></rds-button>
        <rds-button variant="primary" label="Button 2"></rds-button>
        <rds-button variant="primary" label="Button 3"></rds-button>
      </rds-button-group>
    </div>

    <div>
      <h3>Mixed Variants</h3>
      <rds-button-group orientation="horizontal" label="Mixed variants">
        <rds-button variant="primary" label="Primary"></rds-button>
        <rds-button variant="secondary" label="Secondary"></rds-button>
        <rds-button variant="ghost" label="Ghost"></rds-button>
      </rds-button-group>
    </div>

    <div>
      <h3>Action Buttons</h3>
      <rds-button-group orientation="horizontal" label="Action buttons">
        <rds-button variant="success" label="Save"></rds-button>
        <rds-button variant="warning" label="Preview"></rds-button>
        <rds-button variant="danger" label="Cancel"></rds-button>
      </rds-button-group>
    </div>
  </div>
`;

export const WithIcons = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <h3>Horizontal with Icons</h3>
      <rds-button-group orientation="horizontal" label="Navigation buttons">
        <rds-button icon-name="chevron-left" icon-placement="before" label="Previous"></rds-button>
        <rds-button icon-name="home" label="Home"></rds-button>
        <rds-button icon-name="chevron-right" icon-placement="after" label="Next"></rds-button>
      </rds-button-group>
    </div>

    <div>
      <h3>Vertical with Icons</h3>
      <rds-button-group orientation="vertical" label="Text alignment buttons">
        <rds-button icon-name="text-left" label="Left"></rds-button>
        <rds-button icon-name="justify" label="Center"></rds-button>
        <rds-button icon-name="text-right" label="Right"></rds-button>
      </rds-button-group>
    </div>
  </div>
`;

export const AllSizes = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <h3>Small</h3>
      <rds-button-group orientation="horizontal" size="sm" label="Small buttons">
        <rds-button size="sm" label="Button 1"></rds-button>
        <rds-button size="sm" label="Button 2"></rds-button>
        <rds-button size="sm" label="Button 3"></rds-button>
      </rds-button-group>
    </div>

    <div>
      <h3>Medium</h3>
      <rds-button-group orientation="horizontal" size="md" label="Medium buttons">
        <rds-button size="md" label="Button 1"></rds-button>
        <rds-button size="md" label="Button 2"></rds-button>
        <rds-button size="md" label="Button 3"></rds-button>
      </rds-button-group>
    </div>

    <div>
      <h3>Large</h3>
      <rds-button-group orientation="horizontal" size="lg" label="Large buttons">
        <rds-button size="lg" label="Button 1"></rds-button>
        <rds-button size="lg" label="Button 2"></rds-button>
        <rds-button size="lg" label="Button 3"></rds-button>
      </rds-button-group>
    </div>
  </div>
`;
