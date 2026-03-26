import { Component, h, Prop } from '@stencil/core';

export type BadgeVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' | 'success' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type IconPlacement = 'before' | 'after';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  tag: 'rdc-badge',
  styleUrl: 'badge.scss',
  shadow: false,
  scoped: true,
})
export class RdcBadge {
  /**
   * Visual style of the badge.
   */
  @Prop() variant: BadgeVariant = 'primary';

  /**
   * Badge size.
   */
  @Prop() size: BadgeSize = 'md';

  /**
   * Fallback text when no default slot is provided.
   */
  @Prop() label?: string;

  /**
   * Bootstrap icon name to display in the badge.
   */
  @Prop() iconName?: string;

  /**
   * Icon placement position: before or after text.
   */
  @Prop() iconPlacement: IconPlacement = 'before';

  private get badgeClass() {
    return `badge variant-${this.variant} size-${this.size}`;
  }

  private get iconSize(): IconSize {
    const sizeMap: Record<BadgeSize, IconSize> = {
      sm: 'xs',
      md: 'xs',
      lg: 'sm',
    };
    return sizeMap[this.size];
  }

  private renderIcon() {
    if (!this.iconName) return null;
    return <rdc-icon name={this.iconName} size={this.iconSize} color="inherit" class="badge-icon"></rdc-icon>;
  }

  render() {
    const icon = this.renderIcon();
    const content = <slot>{this.label}</slot>;

    return (
      <span class={this.badgeClass} part="badge">
        {this.iconPlacement === 'before' && icon}
        {this.label?.length > 0 && <span class="badge-content">{content}</span>}
        {this.iconPlacement === 'after' && icon}
      </span>
    );
  }
}
