import { BottleVerse, BottleNumber, BottleNumber0, BottleNumber1, BottleNumber6 } from '../lib/bottleVerse';

describe('BottleVerse', () => {
  test('verse general rule upper bound', () => {
    const expected =
      '99 bottles of milk on the wall, ' +
      '99 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of milk on the wall.\n';
    expect(BottleVerse.lyrics(99)).toBe(expected);
  });

  test('verse general rule lower bound', () => {
    const expected =
      '3 bottles of milk on the wall, ' +
      '3 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of milk on the wall.\n';
    expect(BottleVerse.lyrics(3)).toBe(expected);
  });

  test('verse 7', () => {
    const expected =
      '7 bottles of milk on the wall, ' +
      '7 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '1 six-pack of milk on the wall.\n';
    expect(BottleVerse.lyrics(7)).toBe(expected);
  });

  test('verse 6', () => {
    const expected =
      '1 six-pack of milk on the wall, ' +
      '1 six-pack of milk.\n' +
      'Take one down and pass it around, ' +
      '5 bottles of milk on the wall.\n';
    expect(BottleVerse.lyrics(6)).toBe(expected);
  });

  test('verse 2', () => {
    const expected =
      '2 bottles of milk on the wall, ' +
      '2 bottles of milk.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of milk on the wall.\n';
    expect(BottleVerse.lyrics(2)).toBe(expected);
  });

  test('verse 1', () => {
    const expected =
      '1 bottle of milk on the wall, ' +
      '1 bottle of milk.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of milk on the wall.\n';
    expect(BottleVerse.lyrics(1)).toBe(expected);
  });

  test('verse 0', () => {
    const expected =
      'No more bottles of milk on the wall, ' +
      'no more bottles of milk.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of milk on the wall.\n';
    expect(BottleVerse.lyrics(0)).toBe(expected);
  });
});



describe('BottleNumber', () => {
  test('returns correct class for given number', () => {
    // BottleNumbers 0, 1 and 6 are special
    expect(BottleNumber.for(0).constructor).toBe(BottleNumber0);
    expect(BottleNumber.for(1).constructor).toBe(BottleNumber1);
    expect(BottleNumber.for(6).constructor).toBe(BottleNumber6);

    // other numbers use default
    expect(BottleNumber.for(2).constructor).toBe(BottleNumber);
    expect(BottleNumber.for(7).constructor).toBe(BottleNumber);
    expect(BottleNumber.for(99).constructor).toBe(BottleNumber);
  });
});