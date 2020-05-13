import defaultColors from '../styles/defaultColors';

export default function colorIterator() {
  let colorCount = 0;

  return function defineColors() {
    if (colorCount >= defaultColors.length) {
      colorCount = 0;
    }

    const color = defaultColors[colorCount];
    colorCount += 1;

    return color;
  };
}
