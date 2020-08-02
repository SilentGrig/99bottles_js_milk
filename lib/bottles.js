import { downTo } from './helpers';

class Bottles {
  constructor() { }

  verse(numOfBottles) {
    switch (numOfBottles) {
      case 2:
        return '2 bottles of milk on the wall, 2 bottles of milk.\n' +
          'Take one down and pass it around, 1 bottle of milk on the wall.\n';
      case 1:
        return '1 bottle of milk on the wall, 1 bottle of milk.\n' +
          'Take it down and pass it around, no more bottles of milk on the wall.\n';
      case 0:
        return 'No more bottles of milk on the wall, no more bottles of milk.\n' +
          'Go to the store and buy some more, 99 bottles of milk on the wall.\n';
      default:
        return `${numOfBottles} bottles of milk on the wall, ${numOfBottles} bottles of milk.\n` +
          `Take one down and pass it around, ${numOfBottles - 1} bottles of milk on the wall.\n`;
    }
  }

  verses(start, end) {
    return downTo(start, end)
      .map(numOfBottles => this.verse(numOfBottles))
      .join('\n');
  }

  song() {
    return this.verses(99, 0);
  }
}

export { Bottles };