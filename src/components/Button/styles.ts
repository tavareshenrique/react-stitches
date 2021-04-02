import { transparentize } from 'polished';

import { styled } from '../../styles/theme';

export const ButtonStyle = styled('button', {
  borderRadius: '20px',
  border: 0,
  fontSize: '24px',
  height: '72px',
  minWidth: '200px',
  width: 'auto',

  '@bp1': {
    minWidth: '180px',
    width: 'auto',
  },

  variants: {
    color: {
      green: {
        backgroundColor: '#1EBF73',
        color: '#fff',
        '&:hover': {
          backgroundColor: `${transparentize(0.3, '#1EBF73')}`,
        },
      },
      red: {
        backgroundColor: '#F1574D',
        color: '#fff',
        '&:hover': {
          backgroundColor: `${transparentize(0.3, '#F1574D')}`,
        },
      },
    },
  },

  defaultVariants: {
    color: 'green',
  },
});
