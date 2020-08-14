import { BottleVerse, BottleNumber, BottleNumber0, BottleNumber1, BottleNumber6 } from '../lib/bottleVerse';

describe('BottleVerse', () => {
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