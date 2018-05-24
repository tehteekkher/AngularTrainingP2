import {
  Component, OnInit, Input,
  Output, EventEmitter, ViewEncapsulation
} from '@angular/core';
import { StatusEmit } from '../../interfaces/status-emit.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  @Output()
  loginTrial = new EventEmitter<StatusEmit>();

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
    // email a@a.c
    // password 111
    console.log(email, pwd);

    if (email === 'a@a.c' && pwd === '111') {
      alert('login sucessful');

      this.loginTrial.emit({ status: 'SUCCESS' });
      return;
    }

    this.loginTrial.emit({ status: 'FAIL' });
    alert('login failed');
  }

}
