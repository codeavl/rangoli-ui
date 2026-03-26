import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

const meta: Meta = {
  title: 'Components/Icon',
  component: 'rds-icon',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Bootstrap icon name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'heart' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'inherit'],
      description: 'Icon color variant',
      table: {
        type: { summary: 'primary | secondary | danger | warning | success | info | inherit' },
        defaultValue: { summary: 'inherit' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'heart',
    size: 'md',
    color: 'inherit',
  },
  render: (args) => html`<rds-icon name="${args.name}" size="${args.size}" color="${args.color}"></rds-icon>`,
};

export const Sizes: Story = {
  args: {
    name: "heart"
  },

  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <rds-icon name="heart" size="xs"></rds-icon>
      <rds-icon name="heart" size="sm"></rds-icon>
      <rds-icon name="heart" size="md"></rds-icon>
      <rds-icon name="heart" size="lg"></rds-icon>
      <rds-icon name="heart" size="xl"></rds-icon>
    </div>
  `
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <rds-icon name="check-circle-fill" size="lg" color="primary"></rds-icon>
      <rds-icon name="exclamation-triangle-fill" size="lg" color="warning"></rds-icon>
      <rds-icon name="x-circle-fill" size="lg" color="danger"></rds-icon>
      <rds-icon name="info-circle-fill" size="lg" color="info"></rds-icon>
      <rds-icon name="check2-circle" size="lg" color="success"></rds-icon>
    </div>
  `,
};

export const CommonIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="heart-fill" size="lg" color="primary"></rds-icon>
        <span style="font-size: 0.875rem;">heart</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="star-fill" size="lg" color="primary"></rds-icon>
        <span style="font-size: 0.875rem;">star</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="bell" size="lg" color="inherit"></rds-icon>
        <span style="font-size: 0.875rem;">bell</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="gear" size="lg" color="inherit"></rds-icon>
        <span style="font-size: 0.875rem;">settings</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="search" size="lg" color="inherit"></rds-icon>
        <span style="font-size: 0.875rem;">search</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <rds-icon name="trash" size="lg" color="danger"></rds-icon>
        <span style="font-size: 0.875rem;">delete</span>
      </div>
    </div>
  `,
};

export const WithAriaLabel: Story = {
  args: {
    name: 'heart-fill',
    size: 'md',
    color: 'danger',
    ariaLabel: 'Like this',
  },
  render: (args) => html`
    <rds-icon name="${args.name}" size="${args.size}" color="${args.color}" aria-label="${args.ariaLabel}"></rds-icon>
  `,
};
