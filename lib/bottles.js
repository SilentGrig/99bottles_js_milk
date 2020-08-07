import { downTo } from './helpers';

class Bottles {
  constructor() { }

  verse(number) {
    const bottleNumber = BottleNumber.for(number);

    return (
      capitalize(`${bottleNumber} of milk on the wall, `) + 
      `${bottleNumber} of milk.\n` +
      `${bottleNumber.action()}, ` +
      `${bottleNumber.successor()} of milk on the wall.\n`
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
}

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    return 'bottles';
  }

  pronoun() {
    return 'one';
  }

  quantity() {
    return String(this.number);
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  static for(number) {
    const bottleNumberClass = {
      0: BottleNumber0,
      1: BottleNumber1,
      6: BottleNumber6
    }[number] || BottleNumber;

    return new bottleNumberClass(number);
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
    return BottleNumber.for(99);
  }

  action() {
    return 'Go to the store and buy some more';
  }
}

class BottleNumber1 extends BottleNumber {
  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

class BottleNumber6 extends BottleNumber {
  container() {
    return 'six-pack';
  }

  quantity() {
    return '1';
  }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export { Bottles };
