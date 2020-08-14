import { CountDownSong } from '../lib/bottles';
import { testPlaysVerseRole } from '../lib/helpers';

describe('CountDownSong', () => {
  test('verse', () => {
    const expected = 'This is verse 42\n';
    expect(new CountDownSong(FakeVerse).verse(42)).toBe(expected);
  });

  test('verses', () => {
    const expected =
      'This is verse 99\n' +
      '\n' +
      'This is verse 98\n' +
      '\n' +
      'This is verse 97\n';
    expect(new CountDownSong(FakeVerse).verses(99, 97)).toBe(expected);
  });

  test('song', () => {
    const expected =
      'This is verse 44\n' +
      '\n' +
      'This is verse 43\n' +
      '\n' +
      'This is verse 42\n' +
      '\n' +
      'This is verse 41\n' +
      '\n' +
      'This is verse 40\n';
    expect(new CountDownSong(FakeVerse, 44, 40).song()).toBe(expected);
  });
});

class FakeVerse {
  static lyrics(number) {
    return `This is verse ${number}\n`;
  }
}

describe('FakeVerse', () => {
  testPlaysVerseRole(FakeVerse);
});
