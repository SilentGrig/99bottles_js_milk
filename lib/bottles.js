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

  static canHandle() {
    return true;
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find(
      candidate => candidate.canHandle(number)
    );

    return new bottleNumberClass(number);
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

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

BottleNumber.register(BottleNumber0);

class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }

  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }
}

BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  container() {
    return 'six-pack';
  }

  quantity() {
    return '1';
  }
}

BottleNumber.register(BottleNumber6);

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export { Bottles };
