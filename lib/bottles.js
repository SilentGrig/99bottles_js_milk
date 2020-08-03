import { downTo } from './helpers';

class Bottles {
  constructor() { }

  verse(number) {
    const bottleNumber = this.bottleNumberFor(number);
    const nextBottleNumber = this.bottleNumberFor(bottleNumber.successor());

    return (
      capitalize(`${bottleNumber} of milk on the wall, `) + 
      `${bottleNumber} of milk.\n` +
      `${bottleNumber.action()}, ` +
      `${nextBottleNumber} of milk on the wall.\n`
    );
  }

  verses(start, end) {
    return downTo(start, end)
      .map(number => this.verse(number))
      .join('\n');
  }  

  song() {
    return this.verses(99, 0);
  }

  bottleNumberFor(number) {
    let bottleNumberClass;

    if (number === 0) {
      bottleNumberClass = BottleNumber0;
    } else {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
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
    return String(this.number);
  }

  successor() {
    return this.number - 1;
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

class BottleNumber0 extends BottleNumber {
  quantity() {
    return 'no more';
  }

  successor() {
    return 99;
  }

  action() {
    return 'Go to the store and buy some more';
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export { Bottles };