import { describe, expect, h, it, render } from '@stencil/vitest';

describe('rds-button', () => {
  it('renders with slot content (defaults to primary/md)', async () => {
    const { root } = await render(<rds-button>Click</rds-button>);
    await expect(root).toEqualHtml(`
      <rds-button class="hydrated">
        <mock:shadow-root>
          <button class="btn variant-primary size-md" type="button" part="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Click
      </rds-button>
    `);
  });

  it('renders disabled state', async () => {
    const { root } = await render(
      <rds-button disabled={true} variant="secondary">
        Disabled
      </rds-button>,
    );

    await expect(root).toEqualHtml(`
      <rds-button class="hydrated">
        <mock:shadow-root>
          <button class="btn variant-secondary size-md" disabled type="button" part="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Disabled
      </rds-button>
    `);
  });
});

