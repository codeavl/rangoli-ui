import { html } from 'lit-html';

export default {
  title: 'Design System/Avatar',
  parameters: {
    docs: {
      description: {
        component:
          'An avatar component for `rangoli-ui`. Displays user profile images with automatic fallback to initials. Use the controls below to preview different sizes and variants.',
      },
    },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Avatar image source URL.',
      table: { category: 'Content' },
    },
    firstName: {
      control: { type: 'text' },
      description: 'First name of the person (used for initials fallback).',
      table: { category: 'Content' },
    },
    lastName: {
      control: { type: 'text' },
      description: 'Last name of the person (used for initials fallback).',
      table: { category: 'Content' },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size.',
      table: { category: 'Appearance' },
    },
    shapeVariant: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Avatar shape variant.',
      table: { category: 'Appearance' },
    },
    backgroundColor: {
      control: { type: 'text' },
      description: 'Background color for initials (CSS color value).',
      table: { category: 'Appearance' },
    },
    alt: {
      control: { type: 'text' },
      description: 'Alternative text for the image.',
      table: { category: 'Accessibility' },
    },
  },
};

const Template = (args: {
  src?: string;
  firstName?: string;
  lastName?: string;
  size: string;
  shapeVariant: string;
  backgroundColor?: string;
  alt?: string;
}) => html`
  <rds-avatar
    src=${args.src || ''}
    firstName=${args.firstName || ''}
    lastName=${args.lastName || ''}
    size=${args.size}
    shapeVariant=${args.shapeVariant}
    backgroundColor=${args.backgroundColor || ''}
    alt=${args.alt || ''}
  ></rds-avatar>
`;

export const Playground = Template.bind({});
Playground.args = {
  src: 'https://i.pravatar.cc/150?img=1',
  firstName: 'John',
  lastName: 'Doe',
  size: 'md',
  shapeVariant: 'circle',
  alt: 'John Doe avatar',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://i.pravatar.cc/150?img=3',
  firstName: 'Jane',
  lastName: 'Smith',
  size: 'md',
  shapeVariant: 'circle',
  alt: 'Jane Smith avatar',
};

export const Initials = Template.bind({});
Initials.args = {
  firstName: 'Alice',
  lastName: 'Johnson',
  size: 'md',
  shapeVariant: 'circle',
};

export const InitialsOnly = Template.bind({});
InitialsOnly.args = {
  firstName: 'Bob',
  lastName: 'Wilson',
  size: 'md',
  shapeVariant: 'circle',
  backgroundColor: '#8b5cf6',
};

export const Sizes = () => html`
  <div style="display: flex; gap: 16px; align-items: center;">
    <rds-avatar firstName="Extra" lastName="Small" size="xs"></rds-avatar>
    <rds-avatar firstName="Small" lastName="Avatar" size="sm"></rds-avatar>
    <rds-avatar firstName="Medium" lastName="Avatar" size="md"></rds-avatar>
    <rds-avatar firstName="Large" lastName="Avatar" size="lg"></rds-avatar>
    <rds-avatar firstName="Extra" lastName="Large" size="xl"></rds-avatar>
  </div>
`;

export const Shapes = () => html`
  <div style="display: flex; gap: 16px; align-items: center;">
    <rds-avatar
      src="https://i.pravatar.cc/150?img=5"
      firstName="John"
      lastName="Doe"
      size="md"
      shapeVariant="circle"
    ></rds-avatar>
    <rds-avatar
      src="https://i.pravatar.cc/150?img=6"
      firstName="Jane"
      lastName="Smith"
      size="md"
      shapeVariant="square"
    ></rds-avatar>
  </div>
`;

export const Colors = () => html`
  <div style="display: flex; gap: 16px; align-items: center;">
    <rds-avatar
      firstName="Red"
      lastName="Avatar"
      size="md"
      backgroundColor="#dc2626"
    ></rds-avatar>
    <rds-avatar
      firstName="Blue"
      lastName="Avatar"
      size="md"
      backgroundColor="#2563eb"
    ></rds-avatar>
    <rds-avatar
      firstName="Green"
      lastName="Avatar"
      size="md"
      backgroundColor="#16a34a"
    ></rds-avatar>
    <rds-avatar
      firstName="Purple"
      lastName="Avatar"
      size="md"
      backgroundColor="#8b5cf6"
    ></rds-avatar>
    <rds-avatar
      firstName="Orange"
      lastName="Avatar"
      size="md"
      backgroundColor="#f97316"
    ></rds-avatar>
  </div>
`;

export const Group = () => html`
  <div style="display: flex; gap: -8px; align-items: center; margin-bottom: 20px;">
    <rds-avatar
      src="https://i.pravatar.cc/150?img=7"
      firstName="User"
      lastName="One"
      size="md"
      shapeVariant="circle"
      style="margin-right: -8px; border: 2px solid white;"
    ></rds-avatar>
    <rds-avatar
      src="https://i.pravatar.cc/150?img=8"
      firstName="User"
      lastName="Two"
      size="md"
      shapeVariant="circle"
      style="margin-right: -8px; border: 2px solid white;"
    ></rds-avatar>
    <rds-avatar
      src="https://i.pravatar.cc/150?img=9"
      firstName="User"
      lastName="Three"
      size="md"
      shapeVariant="circle"
      style="border: 2px solid white;"
    ></rds-avatar>
  </div>
`;

export const InitialsWithCustomColors = () => html`
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <rds-avatar
      firstName="Alice"
      lastName="Brown"
      size="lg"
      backgroundColor="#ec4899"
    ></rds-avatar>
    <rds-avatar
      firstName="Bob"
      lastName="Green"
      size="lg"
      backgroundColor="#06b6d4"
    ></rds-avatar>
    <rds-avatar
      firstName="Charlie"
      lastName="Blue"
      size="lg"
      backgroundColor="#3b82f6"
    ></rds-avatar>
    <rds-avatar
      firstName="Diana"
      lastName="Purple"
      size="lg"
      backgroundColor="#a855f7"
    ></rds-avatar>
    <rds-avatar
      firstName="Eve"
      lastName="Pink"
      size="lg"
      backgroundColor="#f472b6"
    ></rds-avatar>
  </div>
`;

export const ImageFallback = () => html`
  <div style="display: flex; gap: 12px; align-items: center;">
    <rds-avatar
      src="https://invalid-url-that-will-fail.com/image.jpg"
      firstName="Fallback"
      lastName="Test"
      size="md"
      backgroundColor="#f59e0b"
    ></rds-avatar>
    <span>← Image failed, showing initials</span>
  </div>
`;

export const AllSizesWithImages = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <h3>Extra Small</h3>
      <rds-avatar
        src="https://i.pravatar.cc/150?img=10"
        firstName="XS"
        lastName="Avatar"
        size="xs"
      ></rds-avatar>
    </div>
    <div>
      <h3>Small</h3>
      <rds-avatar
        src="https://i.pravatar.cc/150?img=11"
        firstName="SM"
        lastName="Avatar"
        size="sm"
      ></rds-avatar>
    </div>
    <div>
      <h3>Medium</h3>
      <rds-avatar
        src="https://i.pravatar.cc/150?img=12"
        firstName="MD"
        lastName="Avatar"
        size="md"
      ></rds-avatar>
    </div>
    <div>
      <h3>Large</h3>
      <rds-avatar
        src="https://i.pravatar.cc/150?img=13"
        firstName="LG"
        lastName="Avatar"
        size="lg"
      ></rds-avatar>
    </div>
    <div>
      <h3>Extra Large</h3>
      <rds-avatar
        src="https://i.pravatar.cc/150?img=14"
        firstName="XL"
        lastName="Avatar"
        size="xl"
      ></rds-avatar>
    </div>
  </div>
`;
