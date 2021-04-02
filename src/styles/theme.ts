import { createCss } from '@stitches/react';

const { styled, global } = createCss({
  media: {
    bp1: '(max-width: 500px)',
  },
});

export { styled, global };
