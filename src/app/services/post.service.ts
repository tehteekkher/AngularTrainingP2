import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

  getAll() {
    return [
      { id: 1, title: 'test' },
      { id: 1, title: 'angular' },
    ];
  }

}
