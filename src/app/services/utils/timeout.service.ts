import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeoutService {

  constructor() { }

  timeout(ms) {
    return new Promise(res => setTimeout(res, ms));
  }
}
