import { Component, h, Prop } from '@stencil/core';

export type BadgeVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' | 'success' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'rdc-badge',
  styleUrl: 'badge.scss',
  shadow: true,
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

  private get badgeClass() {
    return `badge variant-${this.variant} size-${this.size}`;
  }

  render() {
    return (
      <span class={this.badgeClass} part="badge">
        <slot>{this.label}</slot>
      </span>
    );
  }
}
