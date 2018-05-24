import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  loginTrial = new EventEmitter();

  color = 'red';
  bgColor = 'yellow';

  credential = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  login(email: string, pwd: string) {
    this.loginTrial.emit();

    // email a@a.c
    // password 111
    console.log(email, pwd);

    if (email === 'a@a.c' && pwd === '111') {
      alert('login sucessful');
      return;
    }

    alert('login failed');
  }

}
