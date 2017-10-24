import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;
    
    let words = value.split(' ');

    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.isPreposition(words[i]))
        words[i] = this.toLowerCase(words[i]);
      else
        words[i] = this.toTitleCase(words[i]);
    }
      return value = words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      "a", "on", "of", "the", "and", "is"
    ];
    return prepositions.includes(word.toLowerCase())
  }
  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
  private toLowerCase(word: string): string {
    return word.toLowerCase();
  }
}
