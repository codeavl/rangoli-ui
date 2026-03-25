import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  tag: 'rds-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class RdsButton {
  /**
   * Visual style of the button.
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Button size.
   */
  @Prop() size: ButtonSize = 'md';

  /**
   * Disables the button.
   */
  @Prop() disabled = false;

  /**
   * Native button type attribute.
   */
  @Prop() buttonType: ButtonType = 'button';

  /**
   * Fallback text when no default slot is provided.
   */
  @Prop() label?: string;

  @Event() rdsButtonClick!: EventEmitter<void>;

  private get buttonClass() {
    return `btn variant-${this.variant} size-${this.size}`;
  }

  render() {
    return (
      <button
        class={this.buttonClass}
        disabled={this.disabled}
        type={this.buttonType}
        part="button"
        onClick={() => this.rdsButtonClick.emit()}
      >
        <slot>{this.label}</slot>
      </button>
    );
  }
}

