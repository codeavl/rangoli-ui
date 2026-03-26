import { Component, h, Prop } from '@stencil/core';

export type ButtonGroupVariant = 'default' | 'filled' | 'outlined';
export type ButtonGroupOrientation = 'horizontal' | 'vertical';
export type ButtonGroupSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'rds-button-group',
  styleUrl: 'button-group.scss',
  shadow: false,
  scoped: true,
})
export class RdsButtonGroup {
  /**
   * Orientation of the button group.
   */
  @Prop() orientation: ButtonGroupOrientation = 'horizontal';

  /**
   * Size of buttons in the group.
   */
  @Prop() size: ButtonGroupSize = 'md';

  /**
   * Optional label for the button group (for accessibility).
   */
  @Prop() label?: string;

  /**
   * Whether the button group should be disabled.
   */
  @Prop() disabled = false;

  private get groupClass() {
    return `button-group orientation-${this.orientation} size-${this.size} ${this.disabled ? 'disabled' : ''}`;
  }

  render() {
    return (
      <div
        class={this.groupClass}
        role="group"
        aria-label={this.label}
        aria-disabled={this.disabled}
      >
        <slot></slot>
      </div>
    );
  }
}
