import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' | 'success' | 'info';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconPlacement = 'before' | 'after';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  tag: 'rds-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: true,
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

  /**
   * Bootstrap icon name to display in the button.
   */
  @Prop() iconName?: string;

  /**
   * Icon placement position: before or after text.
   */
  @Prop() iconPlacement: IconPlacement = 'before';

  @Event() rdsButtonClick!: EventEmitter<void>;

  private get buttonClass() {
    return `btn variant-${this.variant} size-${this.size}`;
  }

  private get iconSize(): IconSize {
    const sizeMap: Record<ButtonSize, IconSize> = {
      sm: 'xs',
      md: 'xs',
      lg: 'sm',
    };
    return sizeMap[this.size];
  }

  private renderIcon() {
    if (!this.iconName) return null;
    return <rdc-icon name={this.iconName} size={this.iconSize} color="inherit" class="button-icon"></rdc-icon>;
  }

  render() {
    const icon = this.renderIcon();
    const content = <slot>{this.label}</slot>;

    return (
      <button
        class={this.buttonClass}
        disabled={this.disabled}
        type={this.buttonType}
        part="button"
        onClick={() => this.rdsButtonClick.emit()}
      >
        {this.iconPlacement === 'before' && icon}
        {this.label?.length > 0 && <span class="button-content">{content}</span>}
        {this.iconPlacement === 'after' && icon}
      </button>
    );
  }
}

