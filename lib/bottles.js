import { downTo } from './helpers';
import { BottleVerse } from '../lib/bottleVerse';

class CountDownSong {
  constructor(verseTemplate = BottleVerse, max = 99, min = 0) {
    this.verseTemplate = verseTemplate;
    this.max = max;
    this.min = min;
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
    return this.verses(this.max, this.min);
  }
}

export { CountDownSong };
