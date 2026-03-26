import { Component, h, Prop } from '@stencil/core';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'inherit';

@Component({
  tag: 'rds-icon',
  styleUrl: 'icon.scss',
  shadow: false,
  scoped: true,
})
export class RdsIcon {
  /**
   * The name of the bootstrap icon to display.
   * @example "heart", "check-circle", "bell-fill"
   */
  @Prop() name!: string;

  /**
   * Icon size.
   */
  @Prop() size: IconSize = 'md';

  /**
   * Icon color variant.
   */
  @Prop() color: IconColor = 'inherit';

  /**
   * Custom CSS class to apply to the icon.
   */
  @Prop() class?: string;

  /**
   * ARIA label for accessibility.
   */
  @Prop() ariaLabel?: string;

  private get iconClass() {
    return `bi bi-${this.name}`;
  }

  private get wrapperClass() {
    return `icon size-${this.size} color-${this.color}`;
  }

  render() {
    return (
      <div class={this.wrapperClass} part="wrapper">
        <i class={this.iconClass} part="icon" aria-label={this.ariaLabel} role={this.ariaLabel ? 'img' : undefined}>
        </i>
      </div>
    );
  }
}

