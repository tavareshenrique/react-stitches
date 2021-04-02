import { global } from './theme';

const globalStyles = global({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '#121214',
    color: '#FFF',
  },

  'body, input, button': {
    font: '400 1rem "Balsamiq Sans", sans-serif',
  },

  button: {
    cursor: 'pointer',
  },
});

export default globalStyles;
