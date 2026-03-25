// Import global design tokens
import '../dist/rangoli-ui/rangoli-ui.css';

// Import the compiled Stencil component bundle so custom elements are registered.
import '../dist/rangoli-ui/rangoli-ui.esm.js';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: { expanded: true },
};

export const tags = ['autodocs'];

