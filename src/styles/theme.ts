import { mapPixels } from './utils';

const colors = {
  background: '#181818',
  select: '#242424',
  light: '#303030',
  text: '#AAAAAA',
  link: '#EEEEEE',
};

const fontSize = {
  regular: 16,
  large: 21,
};

const unit = fontSize.regular * 1.5;

export const Theme = {
  colors,

  fontSize,
  fontSizePx: mapPixels(fontSize),

  unit,
  unitPx: unit + 'px',

  maxContentSize: `${unit * 40}px`,
  topSpacing: `${unit * 2}px`,
};

export default Theme;
