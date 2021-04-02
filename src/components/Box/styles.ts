import { styled } from '../../styles/theme';

export const Container = styled('div', {
  width: '500px',
  height: '400px',

  borderRadius: 20,

  backgroundColor: '#202024',

  padding: 32,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@bp1': {
    width: '450px',
  },
});

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: 48,
  },

  span: {
    fontSize: 16,
    margin: '16px 0',
    color: '#b5bdbb',
  },
});

export const Content = styled('div', {
  width: '100%',
  height: '100%',

  padding: 8,

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
