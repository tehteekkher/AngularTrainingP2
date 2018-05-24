import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postSvc: PostService) {
  }

  ngOnInit() {
    // I want to call post service
    // to get the list of post
    // this.posts = this.postSvc.getAll();

    this.getPosts();
  }

  getPosts() {
    this.postSvc.getAll2()
      .subscribe(data => {
        this.posts = data;
      });
  }

}
