import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getAll() {
    return [
      { id: 1, title: 'test' },
      { id: 1, title: 'angular' },
    ];
  }

  getAll2() {
    // get data from api
    const api = environment.apiBaseUrl + '/posts';
    return this.http.get<Post[]>(api);
  }

}
