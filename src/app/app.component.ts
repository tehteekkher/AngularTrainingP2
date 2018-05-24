import { Component } from '@angular/core';
import { StatusEmit } from './interfaces/status-emit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginAttempts = [];
  failedAttempts = 0;
  shouldHide = false;

  get shouldHideHeader() {
    return this.failedAttempts >= 3;
  }

  headerTitle = 'xxx corp';

  countLogin(statusObj: StatusEmit) {
    if (statusObj.status === 'FAIL') {
      this.failedAttempts = this.failedAttempts + 1;
    }

    // if (this.failedAttempts >= 3) {
    //   this.shouldHide = true;
    // }

    this.loginAttempts.push(statusObj);
  }
}
