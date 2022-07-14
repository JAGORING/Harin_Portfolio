import { css } from 'styled-components';

const sizes = {
  small: 700,
  medium: 1050,
  large: 1200,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${label === 'large' ? 'min-width' : 'max-width'}: ${sizes[label] /
      16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
