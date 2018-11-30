import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayShufflerService {

  constructor() { }

  shuffle(sourceArray) {
    const times = 10;

    for (let i = 0; i < times; i++) {
      sourceArray = this.innerShuffle(sourceArray);
    }

    return sourceArray;
  }

  private innerShuffle(sourceArray) {
    const array = sourceArray.slice(0);
    let counter = array.length;
    let index, temp;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
}
