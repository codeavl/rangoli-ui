import { Component, h, Prop, State } from '@stencil/core';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShapeVariant = 'circle' | 'square';

@Component({
  tag: 'rds-avatar',
  styleUrl: 'avatar.scss',
  shadow: false,
  scoped: true,
})
export class RdsAvatar {
  /**
   * Avatar image source URL.
   */
  @Prop() src?: string;

  /**
   * First name of the person (used for initials fallback).
   */
  @Prop() firstName?: string;

  /**
   * Last name of the person (used for initials fallback).
   */
  @Prop() lastName?: string;

  /**
   * Avatar size.
   */
  @Prop() size: AvatarSize = 'md';

  /**
   * Avatar shape variant.
   */
  @Prop() shapeVariant: AvatarShapeVariant = 'circle';

  /**
   * Alternative text for image.
   */
  @Prop() alt?: string;

  /**
   * Background color for initials (CSS color value or color name).
   */
  @Prop() backgroundColor?: string;

  @State() imageLoaded = false;
  @State() imageError = false;

  private get initials(): string {
    let result = '';

    if (this.firstName) {
      result += this.firstName.charAt(0).toUpperCase();
    }

    if (this.lastName) {
      result += this.lastName.charAt(0).toUpperCase();
    }

    return result || '?';
  }

  private get avatarClass() {
    return `avatar size-${this.size} shape-${this.shapeVariant} ${this.imageError || !this.src ? 'initials' : 'image'}`;
  }

  private get styleVars() {
    const styles: { [key: string]: string } = {};

    if (this.backgroundColor && (this.imageError || !this.src)) {
      styles['--avatar-bg-color'] = this.backgroundColor;
    }

    return styles;
  }

  private handleImageLoad = () => {
    this.imageLoaded = true;
    this.imageError = false;
  };

  private handleImageError = () => {
    this.imageError = true;
    this.imageLoaded = false;
  };

  render() {
    const shouldShowImage = this.src && !this.imageError;
    const shouldShowInitials = !this.src || this.imageError;

    return (
      <div class={this.avatarClass} style={this.styleVars}>
        {shouldShowImage && (
          <img
            src={this.src}
            alt={this.alt || `${this.firstName || ''} ${this.lastName || ''}`.trim()}
            onLoad={this.handleImageLoad}
            onError={this.handleImageError}
            class="avatar-image"
          />
        )}

        {shouldShowInitials && (
          <span class="avatar-initials">
            {this.initials}
          </span>
        )}
      </div>
    );
  }
}
