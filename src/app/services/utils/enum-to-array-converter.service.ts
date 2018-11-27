import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumToArrayConverterService {

  constructor() { }

  convert(enumm) {
    const enumAsArray = Object.values(enumm);
    return this.getUniqValues(enumAsArray);
  }

  private getUniqValues(enumArray) {
    return this.getHalfArray(enumArray);
  }

  private getHalfArray(array) {
    const halfLength = Math.ceil(array.length / 2);
    return array.splice(0, halfLength);
  }
}
