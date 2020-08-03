import { downTo } from './helpers';

class Bottles {
  constructor() { }

  verse(number) {
    return `${capitalize(this.quantity(number))} ${this.container(number)} of milk on the wall, ` +
      `${this.quantity(number)} ${this.container(number)} of milk.\n` +
      `${this.action(number)}, ` +
      `${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of milk on the wall.\n`;
  }

  container(number) {
    if (number === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  pronoun(number) {
    if (number === 1) {
      return 'it';
    }
    return 'one';
  }

  quantity(number=0) {
    if (number === 0) {
      return 'no more';
    }
    return String(number);
  }

  successor(number) {
    if (number === 0) {
      return 99;
    }
    return number - 1;
  }

  verses(start, end) {
    return downTo(start, end)
      .map(numOfBottles => this.verse(numOfBottles))
      .join('\n');
  }

  action(number) {
    if (number === 0) {
      return 'Go to the store and buy some more';
    }
    return `Take ${this.pronoun(number)} down and pass it around`;
  }

  song() {
    return this.verses(99, 0);
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export { Bottles };