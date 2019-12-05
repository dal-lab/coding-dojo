// Node.js 12+

const total_score1 = text =>
  [...text.matchAll(/(\d+)([SDT]+)([*#]?)/g)].reduce((acc, [_, ...x]) => (
    last(x) === '*'
      ? [...head(acc), last(acc) * 2, score(x) * 2] : [...acc, score(x)]
  ), []).filter(Number.isInteger).reduce((a, b) => a + b);

const score = ([a, b, c]) => (+a) ** ' SDT'.indexOf(b) * (c === '#' ? -1 : 1);

const head = xs => xs.slice(0, -1);
const last = xs => xs.slice(-1)[0];

// old Node.js

const total_score2 = text =>
  [...matchAll(text, /(\d+)([SDT]+)([*#]?)/)].reduce((acc, [_, ...x]) => (
    last(x) === '*'
      ? [...head(acc), last(acc) * 2, score(x) * 2] : [...acc, score(x)]
  ), []).filter(Number.isInteger).reduce((a, b) => a + b);

const matchAll = (text, pattern) =>
  [...text.match(RegExp(pattern, 'g'))].map(i => i.match(pattern));

// Test -----------------------------------------------------

test('sample', () => {
  [total_score1, total_score2].forEach(total_score => {
    expect(total_score('1S2D*3T')).toBe(37);
    expect(total_score('1D2S#10S')).toBe(9);
    expect(total_score('1D2S0T')).toBe(3);
    expect(total_score('1S*2T*3S')).toBe(23);
    expect(total_score('1D#2S*3S')).toBe(5);
    expect(total_score('1T2D3D#')).toBe(-4);
    expect(total_score('1D2S3T*')).toBe(59);
  });
});
