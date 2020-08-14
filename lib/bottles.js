import { downTo } from './helpers';
import { BottleVerse } from '../lib/bottleVerse';

class Bottles {
  constructor(verseTemplate = BottleVerse) {
    this.verseTemplate = verseTemplate;
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
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

export { Bottles };
