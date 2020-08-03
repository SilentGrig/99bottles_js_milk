import { downTo } from './helpers';

class Bottles {
  constructor() { }

  verse(number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());
    return `${capitalize(bottleNumber.quantity())} ${bottleNumber.container()} of milk on the wall, ` +
      `${bottleNumber.quantity()} ${bottleNumber.container()} of milk.\n` +
      `${bottleNumber.action()}, ` +
      `${nextBottleNumber.quantity()} ${nextBottleNumber.container()} of milk on the wall.\n`;
  }
  
  verses(start, end) {
    return downTo(start, end)
      .map(number => this.verse(number))
      .join('\n');
  }  

  song() {
    return this.verses(99, 0);
  }
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }
  container() {
    if (this.number === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  pronoun() {
    if (this.number === 1) {
      return 'it';
    }
    return 'one';
  }

  quantity() {
    if (this.number === 0) {
      return 'no more';
    }
    return String(this.number);
  }

  successor() {
    if (this.number === 0) {
      return 99;
    }
    return this.number - 1;
  }

  action() {
    if (this.number === 0) {
      return 'Go to the store and buy some more';
    }
    return `Take ${this.pronoun()} down and pass it around`;
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export { Bottles };