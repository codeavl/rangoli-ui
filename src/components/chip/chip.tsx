import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export type ChipVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning' | 'success' | 'info';
export type ChipSize = 'sm' | 'md' | 'lg';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  tag: 'rdc-chip',
  styleUrl: 'chip.scss',
  shadow: false,
  scoped: true,
})
export class RdcChip {
  /**
   * Visual style of the chip.
   */
  @Prop() variant: ChipVariant = 'primary';

  /**
   * Chip size.
   */
  @Prop() size: ChipSize = 'md';

  /**
   * Fallback text when no default slot is provided.
   */
  @Prop() label?: string;

  /**
   * Show close/delete button.
   */
  @Prop() deletable: boolean = false;

  /**
   * Bootstrap icon name for the close button.
   */
  @Prop() closeIconName: string = 'x-circle';

  /**
   * ARIA label for the close button.
   */
  @Prop() closeAriaLabel: string = 'Remove chip';

  /**
   * Event emitted when close button is clicked.
   */
  @Event() rdcChipClose!: EventEmitter<void>;

  private get chipClass() {
    return `chip variant-${this.variant} size-${this.size}`;
  }

  private get closeIconSize(): IconSize {
    const sizeMap: Record<ChipSize, IconSize> = {
      sm: 'xs',
      md: 'xs',
      lg: 'sm',
    };
    return sizeMap[this.size];
  }

  private renderCloseButton() {
    if (!this.deletable) return null;
    return (
      <button
        class="chip-close"
        aria-label={this.closeAriaLabel}
        onClick={() => this.rdcChipClose.emit()}
        type="button"
      >
        <rdc-icon name={this.closeIconName} size={this.closeIconSize} color="inherit"></rdc-icon>
      </button>
    );
  }

  render() {
    const closeButton = this.renderCloseButton();
    const content = <slot>{this.label}</slot>;

    return (
      <span class={this.chipClass} part="chip">
        <span class="chip-content">{content}</span>
        {closeButton}
      </span>
    );
  }
}
